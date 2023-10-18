<script>
	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';

	let socket;
	let messages = [];
	let input = '';
	let userIdStore = writable(
		browser && localStorage.getItem('userId') ? localStorage.getItem('userId') : uuidv4()
	);

	let userId;
	if (browser) {
		userIdStore.subscribe((val) => {
			userId = val;
		});
	}

	let connectionAttempts = 0;
	let isConnected = false;
	let connectionFailed = false;

	async function connectToSocket() {
		if (connectionAttempts >= 5) {
			connectionFailed = true;
			return;
		}

		connectionAttempts++;
		socket = new WebSocket('wss://ws.postman-echo.com/raw');

		socket.addEventListener('open', (event) => {
			isConnected = true;
		});

		socket.addEventListener('close', (event) => {
			isConnected = false;
			setTimeout(() => {
				connectToSocket();
			}, 10000);
		});

		socket.addEventListener('message', (event) => {
			const message = JSON.parse(event.data);
			if (message.userId == userId) {
				message.userId = uuidv4(); // simulate other user
				message.id = uuidv4();
			}
			messages = [...messages, message];
		});
	}

	onMount(() => {
		connectToSocket();
	});

	function sendMessage() {
		if (input.trim() === '') return;
		const message = {
			id: uuidv4(),
			text: input,
			timestamp: new Date().toISOString(),
			userId
		};
		messages = [...messages, message];
		socket.send(JSON.stringify(message));
		input = '';
	}

	function handleKeyDown(event) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
	}

	function formatTimestamp(timestamp) {
		const date = new Date(timestamp);
		return `${date.getHours().toString().padStart(2, '0')}:${date
			.getMinutes()
			.toString()
			.padStart(2, '0')}`;
	}

	function getShortUserId(userId) {
		return userId.toString().slice(0, 5);
	}

	function isCurrentUserMentioned(text) {
		return text.includes(`@${getShortUserId(userId)}`);
	}
</script>

<div
	class="max-w-md mx-auto flex flex-col p-4 bg-gray-900 text-white"
	style="font-family: 'Roboto', sans-serif;"
>
	<div class="h-96 overflow-y-scroll border border-gray-600 p-4 mb-4 bg-gray-800">
		{#if !isConnected}
			<div
				class="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center"
			>
				<div class="text-center">
					<p>Connection failed.</p>
					<p>Attempting to reconnect...</p>
				</div>
			</div>
		{/if}
		{#each messages as message (message.id)}
			<div class="mb-1 flex items-center">
				<div class="inline-block align-middle bg-gray-700 px-2 py-1 rounded-l font-mono">
					{formatTimestamp(message.timestamp)}
				</div>
				<span
					class="inline-block align-middle ml-2 font-mono text-blue-400
            {message.userId === userId ? 'text-yellow-300' : ''}"
				>
					{getShortUserId(message.userId)}
				</span>
				<span
					class="inline-block align-middle ml-2 p-2 rounded-r bg-gray-600
            {isCurrentUserMentioned(message.text) ? 'bg-yellow-600' : ''}"
				>
					{message.text}
				</span>
			</div>
		{/each}
	</div>
	<div class="flex">
		<textarea
			rows="1"
			bind:value={input}
			on:keydown={handleKeyDown}
			placeholder={userId ? `You're ${getShortUserId(userId)}. Type your message...` : ''}
			class="flex-grow border border-gray-600 rounded-l p-2 bg-gray-700 text-white resize-none"
		/>
		<button on:click={sendMessage} class="bg-blue-500 text-white px-4 py-2 rounded-r">Send</button>
	</div>
</div>

<style>
	/* Custom font import */
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
