window.onresize = okay;
window.onload = okay;

const artworks = [
	{
		title: 'akesi',
		author: 'chantel',
		description: '',
		image: '/fanart/akesi_chantel.jpg'
	},
	{
		title: 'akesi_linja',
		author: 'akesinu',
		description: '',
		image: '/fanart/akesi_linja_akesinu.mov'
	},
	{
		title: 'angery',
		author: 'starling',
		description: '',
		image: '/fanart/angery_starling.png'
	},
	{
		title: 'announcer',
		author: 'tekinowi',
		description: '',
		image: '/fanart/announcer_tekinowi.mp3'
	},
	{
		title: 'antikekan',
		author: 'ketami',
		description: '',
		image: '/fanart/antikekan_ketami.jpg'
	},
	{
		title: 'autism',
		author: 'kalaasi',
		description: '',
		image: '/fanart/autism_kalaasi.png'
	},
	{
		title: 'balloon',
		author: 'chantel',
		description: '',
		image: '/fanart/balloon_chantel.jpg'
	},
	{
		title: 'bill_cypher',
		author: 'rats',
		description: '',
		image: '/fanart/bill_cypher_rats.png'
	},
	{
		title: 'bitch',
		author: 'rats',
		description: '',
		image: '/fanart/bitch_rats.png'
	},
	{
		title: 'blender_2',
		author: 'wasowapa',
		description: '',
		image: '/fanart/blender_2_wasowapa.jpg'
	},
	{
		title: 'blender',
		author: 'wasowapa',
		description: '',
		image: '/fanart/blender_wasowapa.jpg'
	},
	{
		title: 'branding',
		author: 'zavixel',
		description: '',
		image: '/fanart/branding_zavixel.png'
	},
	{
		title: 'carry_on',
		author: 'nyxoom',
		description: '',
		image: '/fanart/carry_on_nyxoom.mp4'
	},
	{
		title: 'chalkboard',
		author: 'nyxoom',
		description: '',
		image: '/fanart/chalkboard_nyxoom.png'
	},
	{
		title: 'comic_1',
		author: 'akesinu',
		description: '',
		image: '/fanart/comic_1_akesinu.jpg'
	},
	{
		title: 'comic_2',
		author: 'akesinu',
		description: '',
		image: '/fanart/comic_2_akesinu.jpg'
	},
	{
		title: 'comic_3',
		author: 'akesinu',
		description: '',
		image: '/fanart/comic_3_akesinu.jpg'
	},
	{
		title: 'comic_4',
		author: 'akesinu',
		description: '',
		image: '/fanart/comic_4_akesinu.jpg'
	},
	{
		title: 'comic_5',
		author: 'akesinu',
		description: '',
		image: '/fanart/comic_5_akesinu.jpg'
	},
	{
		title: 'computer_1',
		author: 'tekinowi',
		description: '',
		image: '/fanart/computer_1_tekinowi.png'
	},
	{
		title: 'computer_2',
		author: 'tekinowi',
		description: '',
		image: '/fanart/computer_2_tekinowi.png'
	},
	{
		title: 'computer_3',
		author: 'tekinowi',
		description: '',
		image: '/fanart/computer_3_tekinowi.png'
	},
	{
		title: 'computer_4',
		author: 'tekinowi',
		description: '',
		image: '/fanart/computer_4_tekinowi.png'
	},
	{
		title: 'computer_sketch',
		author: 'tekinowi',
		description: '',
		image: '/fanart/computer_sketch_tekinowi.png'
	},
	{
		title: 'despair',
		author: 'janlilienta',
		description: '',
		image: '/fanart/despair_janlilienta.png'
	},
	{
		title: 'drip',
		author: 'chantel',
		description: '',
		image: '/fanart/drip_chantel.jpg'
	},
	{
		title: 'evil_kekan',
		author: 'tekinowi',
		description: '',
		image: '/fanart/evil_kekan_tekinowi.png'
	},
	{
		title: 'fanart_contest',
		author: 'janani',
		description: '',
		image: '/fanart/fanart_contest_janani.png'
	},
	{
		title: 'fancam_1',
		author: 'wasomu',
		description: '',
		image: '/fanart/fancam_1_wasomu.mp4'
	},
	{
		title: 'fancam_2',
		author: 'wasomu',
		description: '',
		image: '/fanart/fancam_2_wasomu.mp4'
	},
	{
		title: 'fancam_3',
		author: 'akesinu',
		description: '',
		image: '/fanart/fancam_3_akesinu.mov'
	},
	{
		title: 'frog_music',
		author: 'chantel',
		description: '',
		image: '/fanart/frog_music_chantel.jpg'
	},
	{
		title: 'god',
		author: 'squimp',
		description: '',
		image: '/fanart/god_squimp.png'
	},
	{
		title: 'gregham3',
		author: 'jayden',
		description: '',
		image: '/fanart/gregham3_jayden.png'
	},
	{
		title: 'gumball_2',
		author: 'chantel',
		description: '',
		image: '/fanart/gumball_2_chantel.jpg'
	},
	{
		title: 'gumball',
		author: 'chantel',
		description: '',
		image: '/fanart/gumball_chantel.jpg'
	},
	{
		title: 'hamradio',
		author: 'nasaki',
		description: '',
		image: '/fanart/hamradio_nasaki.png'
	},
	{
		title: 'herbevitisto',
		author: 'abf',
		description: '',
		image: '/fanart/herbevitisto_abf.jpg'
	},
	{
		title: 'herbevitisto',
		author: 'umeja',
		description: '',
		image: '/fanart/herbevitisto_umeja.jpg'
	},
	{
		title: 'hold_gently',
		author: 'starling',
		description: '',
		image: '/fanart/hold_gently_starling.png'
	},
	{
		title: 'ithkuil',
		author: 'cuymacu',
		description: '',
		image: '/fanart/ithkuil_cuymacu.jpg'
	},
	{
		title: 'jan_kekan_sans',
		author: 'janpoman',
		description: '',
		image: '/fanart/jan_kekan_sans_janpoman.png'
	},
	{
		title: 'jan_kekan_serif',
		author: 'kasape',
		description: '',
		image: '/fanart/jan_kekan_serif_kasape.png'
	},
	{
		title: 'jellyfish_1',
		author: 'tekinowi',
		description: '',
		image: '/fanart/jellyfish_1_tekinowi.png'
	},
	{
		title: 'jellyfish_2',
		author: 'tekinowi',
		description: '',
		image: '/fanart/jellyfish_2_tekinowi.png'
	},
	{
		title: 'jellyfish',
		author: 'ilonija',
		description: '',
		image: '/fanart/jellyfish_ilonija.png'
	},
	{
		title: 'jerma',
		author: 'akesinu',
		description: '',
		image: '/fanart/jerma_akesinu.mp4'
	},
	{
		title: 'kekan64',
		author: 'janpoman',
		description: '',
		image: '/fanart/kekan64_janpoman.gif'
	},
	{
		title: 'kekan64',
		author: 'menasewi',
		description: '',
		image: '/fanart/kekan64_menasewi.png'
	},
	{
		title: 'kekan_halloween_1',
		author: 'tekinowi',
		description: '',
		image: '/fanart/kekan_halloween_1_tekinowi.png'
	},
	{
		title: 'kekan_halloween_2',
		author: 'tekinowi',
		description: '',
		image: '/fanart/kekan_halloween_2_tekinowi.png'
	},
	{
		title: 'kekan_halloween_3',
		author: 'tekinowi',
		description: '',
		image: '/fanart/kekan_halloween_3_tekinowi.png'
	},
	{
		title: 'kekan_sans',
		author: 'pq',
		description: '',
		image: '/fanart/kekan_sans_pq.png'
	},
	{
		title: 'kekante1',
		author: 'katan',
		description: '',
		image: '/fanart/kekante1_katan.jpg'
	},
	{
		title: 'kekante2',
		author: 'wali',
		description: '',
		image: '/fanart/kekante2_wali.png'
	},
	{
		title: 'kekante3',
		author: 'ilonija',
		description: '',
		image: '/fanart/kekante3_ilonija.png'
	},
	{
		title: 'kepeken_e',
		author: 'wasomu',
		description: '',
		image: '/fanart/kepeken_e_wasomu.png'
	},
	{
		title: 'ketami_monsuta',
		author: 'mi',
		description: '',
		image: '/fanart/ketami_monsuta_mi.png'
	},
	{
		title: 'kon',
		author: 'merrybot',
		description: '',
		image: '/fanart/kon_merrybot.jpg'
	},
	{
		title: 'kulupu',
		author: 'janiseja',
		description: '',
		image: '/fanart/kulupu_janiseja.png'
	},
	{
		title: 'la_thumbnail',
		author: 'nyxoom',
		description: '',
		image: '/fanart/la_thumbnail_nyxoom.png'
	},
	{
		title: 'la_thumbnail_old',
		author: 'nyxoom',
		description: '',
		image: '/fanart/la_thumbnail_old_nyxoom.png'
	},
	{
		title: 'lernan',
		author: 'pq',
		description: '',
		image: '/fanart/lernan_pq.png'
	},
	{
		title: 'lesson7',
		author: 'weluke',
		description: '',
		image: '/fanart/lesson7_weluke.png'
	},
	{
		title: 'li_e_en',
		author: 'nyxoom',
		description: '',
		image: '/fanart/li_e_en_nyxoom.png'
	},
	{
		title: 'link_1',
		author: 'tekinowi',
		description: '',
		image: '/fanart/link_1_tekinowi.png'
	},
	{
		title: 'link_2',
		author: 'tekinowi',
		description: '',
		image: '/fanart/link_2_tekinowi.png'
	},
	{
		title: 'link_3',
		author: 'tekinowi',
		description: '',
		image: '/fanart/link_3_tekinowi.png'
	},
	{
		title: 'link_sketch',
		author: 'tekinowi',
		description: '',
		image: '/fanart/link_sketch_tekinowi.png'
	},
	{
		title: 'lojban',
		author: 'cuymacu',
		description: '',
		image: '/fanart/lojban_cuymacu.jpg'
	},
	{
		title: 'lojban_o_anpa_2',
		author: 'natan',
		description: '',
		image: '/fanart/lojban_o_anpa_2_natan.png'
	},
	{
		title: 'lojban_o_anpa',
		author: 'natan',
		description: '',
		image: '/fanart/lojban_o_anpa_natan.png'
	},
	{
		title: 'lupa',
		author: 'lenlen',
		description: '',
		image: '/fanart/lupa_lenlen.png'
	},
	{
		title: 'masquerade_2',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/masquerade_2_pipikewapi.png'
	},
	{
		title: 'masquerade',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/masquerade_pipikewapi.png'
	},
	{
		title: 'mi_alasa_toki',
		author: 'janika',
		description: '',
		image: '/fanart/mi_alasa_toki_janika.png'
	},
	{
		title: 'mi_jo_2',
		author: 'sipiki',
		description: '',
		image: '/fanart/mi_jo_2_sipiki.gif'
	},
	{
		title: 'mi_jo',
		author: 'sipiki',
		description: '',
		image: '/fanart/mi_jo_sipiki.gif'
	},
	{
		title: 'mi_kala',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_kala_nyxoom.png'
	},
	{
		title: 'mi_laso',
		author: 'lukin',
		description: '',
		image: '/fanart/mi_laso_lukin.png'
	},
	{
		title: 'mi_lawa',
		author: 'akesinu',
		description: '',
		image: '/fanart/mi_lawa_akesinu.png'
	},
	{
		title: 'mi_lawa',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_lawa_nyxoom.png'
	},
	{
		title: 'mi_lawa_seme',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_lawa_seme_nyxoom.png'
	},
	{
		title: 'mi_leko_a',
		author: 'sipiki',
		description: '',
		image: '/fanart/mi_leko_a_sipiki.jpg'
	},
	{
		title: 'mi_leko',
		author: 'cuymacu',
		description: '',
		image: '/fanart/mi_leko_cuymacu.gif'
	},
	{
		title: 'mi_leko',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_leko_nyxoom.png'
	},
	{
		title: 'mi_len',
		author: 'motan',
		description: '',
		image: '/fanart/mi_len_motan.png'
	},
	{
		title: 'mi_li_ala',
		author: 'cuymacu',
		description: '',
		image: '/fanart/mi_li_ala_cuymacu.gif'
	},
	{
		title: 'mi_li_nanpa',
		author: 'menasewi',
		description: '',
		image: '/fanart/mi_li_nanpa_menasewi.png'
	},
	{
		title: 'mi_lili',
		author: 'sqec',
		description: '',
		image: '/fanart/mi_lili_sqec.png'
	},
	{
		title: 'mi_lili',
		author: 'wasokeli',
		description: '',
		image: '/fanart/mi_lili_wasokeli.jpg'
	},
	{
		title: 'mi_linja',
		author: 'mi',
		description: '',
		image: '/fanart/mi_linja_mi.png'
	},
	{
		title: 'mi_lon_e_ma',
		author: 'wasomu',
		description: '',
		image: '/fanart/mi_lon_e_ma_wasomu.png'
	},
	{
		title: 'mi_lon_kasi',
		author: 'mi',
		description: '',
		image: '/fanart/mi_lon_kasi_mi.png'
	},
	{
		title: 'mi_lon',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_lon_nyxoom.png'
	},
	{
		title: 'mi_lukin',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_lukin_nyxoom.png'
	},
	{
		title: 'mi_mani',
		author: 'janjami',
		description: '',
		image: '/fanart/mi_mani_janjami.png'
	},
	{
		title: 'mi_mani',
		author: 'jansa',
		description: '',
		image: '/fanart/mi_mani_jansa.png'
	},
	{
		title: 'mi_meli',
		author: 'akesinu',
		description: '',
		image: '/fanart/mi_meli_akesinu.jpg'
	},
	{
		title: 'mi_mije',
		author: 'akesinu',
		description: '',
		image: '/fanart/mi_mije_akesinu.jpg'
	},
	{
		title: 'mi_mije_ilo_awen',
		author: 'abf',
		description: '',
		image: '/fanart/mi_mije_ilo_awen_abf.png'
	},
	{
		title: 'mi_moli',
		author: 'sipiki',
		description: '',
		image: '/fanart/mi_moli_sipiki.png'
	},
	{
		title: 'mi_monsuta',
		author: 'akesinu',
		description: '',
		image: '/fanart/mi_monsuta_akesinu.png'
	},
	{
		title: 'mi_mrbeast',
		author: 'tekinowi',
		description: '',
		image: '/fanart/mi_mrbeast_tekinowi.png'
	},
	{
		title: 'mi_mute',
		author: 'janjami',
		description: '',
		image: '/fanart/mi_mute_janjami.png'
	},
	{
		title: 'mi_nanpa',
		author: 'wasowapa',
		description: '',
		image: '/fanart/mi_nanpa_wasowapa.png'
	},
	{
		title: 'mi_nasa',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_nasa_nyxoom.png'
	},
	{
		title: 'mi_old',
		author: 'mi',
		description: '',
		image: '/fanart/mi_old_mi.png'
	},
	{
		title: 'mi_pana_e_sona',
		author: 'sipiki',
		description: '',
		image: '/fanart/mi_pana_e_sona_sipiki.png'
	},
	{
		title: 'mi_poni',
		author: 'jankita',
		description: '',
		image: '/fanart/mi_poni_jankita.png'
	},
	{
		title: 'mi_sewi_2',
		author: 'lipamanka',
		description: '',
		image: '/fanart/mi_sewi_2_lipamanka.png'
	},
	{
		title: 'mi_sewi',
		author: 'lipamanka',
		description: '',
		image: '/fanart/mi_sewi_lipamanka.png'
	},
	{
		title: 'mi_sewi',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_sewi_nyxoom.png'
	},
	{
		title: 'mi_sina_beta',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_sina_beta_nyxoom.jpg'
	},
	{
		title: 'mi_sina',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_sina_nyxoom.png'
	},
	{
		title: 'mi_sticker',
		author: 'sipiki',
		description: '',
		image: '/fanart/mi_sticker_sipiki.png'
	},
	{
		title: 'mi_suno',
		author: 'sipiki',
		description: '',
		image: '/fanart/mi_suno_sipiki.png'
	},
	{
		title: 'mi_unpa',
		author: 'horse',
		description: '',
		image: '/fanart/mi_unpa_horse.jpg'
	},
	{
		title: 'mi_waso',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_waso_nyxoom.png'
	},
	{
		title: 'mi_wawa',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_wawa_nyxoom.png'
	},
	{
		title: 'mi_wawa',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/mi_wawa_pipikewapi.png'
	},
	{
		title: 'mi_wile_musi',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mi_wile_musi_nyxoom.png'
	},
	{
		title: 'mi_wink',
		author: 'janani',
		description: '',
		image: '/fanart/mi_wink_janani.png'
	},
	{
		title: 'mi_yugi',
		author: 'tekinowi',
		description: '',
		image: '/fanart/mi_yugi_tekinowi.png'
	},
	{
		title: 'misikekan',
		author: 'kalaasi',
		description: '',
		image: '/fanart/misikekan_kalaasi.png'
	},
	{
		title: 'moli_2',
		author: 'horse',
		description: '',
		image: '/fanart/moli_2_horse.png'
	},
	{
		title: 'moli_3',
		author: 'ketami',
		description: '',
		image: '/fanart/moli_3_ketami.png'
	},
	{
		title: 'moli',
		author: 'horse',
		description: '',
		image: '/fanart/moli_horse.png'
	},
	{
		title: 'moli',
		author: 'wren',
		description: '',
		image: '/fanart/moli_wren.gif'
	},
	{
		title: 'monologue',
		author: 'kalaasi',
		description: '',
		image: '/fanart/monologue_kalaasi.png'
	},
	{
		title: 'movieposter',
		author: 'dogikoko',
		description: '',
		image: '/fanart/movieposter_dogikoko.png'
	},
	{
		title: 'mr_kekan_san',
		author: 'jankita',
		description: '',
		image: '/fanart/mr_kekan_san_jankita.png'
	},
	{
		title: 'mu_a_wawa',
		author: 'nyxoom',
		description: '',
		image: '/fanart/mu_a_wawa_nyxoom.png'
	},
	{
		title: 'mun_kekan_san',
		author: 'janeli',
		description: '',
		image: '/fanart/mun_kekan_san_janeli.png'
	},
	{
		title: 'mun_kekan_san_smw_2',
		author: 'abf',
		description: '',
		image: '/fanart/mun_kekan_san_smw_2_abf.png'
	},
	{
		title: 'mun_kekan_san_smw_3',
		author: 'abf',
		description: '',
		image: '/fanart/mun_kekan_san_smw_3_abf.png'
	},
	{
		title: 'mun_kekan_san_smw_4',
		author: 'abf',
		description: '',
		image: '/fanart/mun_kekan_san_smw_4_abf.png'
	},
	{
		title: 'mun_kekan_san_smw',
		author: 'abf',
		description: '',
		image: '/fanart/mun_kekan_san_smw_abf.png'
	},
	{
		title: 'mun_li_tawa_sike',
		author: 'lipamanka',
		description: '',
		image: '/fanart/mun_li_tawa_sike_lipamanka.mp4'
	},
	{
		title: 'mun_nasa',
		author: 'weluke',
		description: '',
		image: '/fanart/mun_nasa_weluke.png'
	},
	{
		title: 'musi_laso',
		author: 'akesinu',
		description: '',
		image: '/fanart/musi_laso_akesinu.png'
	},
	{
		title: 'musi_laso',
		author: 'ilonija',
		description: '',
		image: '/fanart/musi_laso_ilonija.png'
	},
	{
		title: 'musi_o_awen_1',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/musi_o_awen_1_pipikewapi.jpeg'
	},
	{
		title: 'musi_o_awen_2',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/musi_o_awen_2_pipikewapi.jpeg'
	},
	{
		title: 'nametags',
		author: 'mi',
		description: '',
		image: '/fanart/nametags_mi.jpg'
	},
	{
		title: 'nanpa_mi',
		author: 'menasewi',
		description: '',
		image: '/fanart/nanpa_mi_menasewi.png'
	},
	{
		title: 'nasawawa',
		author: 'happychappy',
		description: '',
		image: '/fanart/nasawawa_happychappy.jpg'
	},
	{
		title: 'nimi_nanpa_kin',
		author: 'nyxoom',
		description: '',
		image: '/fanart/nimi_nanpa_kin_nyxoom.png'
	},
	{
		title: 'njankekan',
		author: 'horse',
		description: '',
		image: '/fanart/njankekan_horse.png'
	},
	{
		title: 'no_thought',
		author: 'wasowapa',
		description: '',
		image: '/fanart/no_thought_wasowapa.png'
	},
	{
		title: 'noka',
		author: 'horse',
		description: '',
		image: '/fanart/noka_horse.png'
	},
	{
		title: '',
		author: 'notes',
		description: '',
		image: '/fanart/notes.txt'
	},
	{
		title: 'o_kama_sona',
		author: 'wasowapa',
		description: '',
		image: '/fanart/o_kama_sona_wasowapa.png'
	},
	{
		title: 'o_monsuta_ala',
		author: 'akesinu',
		description: '',
		image: '/fanart/o_monsuta_ala_akesinu.jpg'
	},
	{
		title: 'o_pona',
		author: 'wasomu',
		description: '',
		image: '/fanart/o_pona_wasomu.png'
	},
	{
		title: 'olin',
		author: 'wasomu',
		description: '',
		image: '/fanart/olin_wasomu.png'
	},
	{
		title: 'pal_greg',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/pal_greg_pipikewapi.png'
	},
	{
		title: 'pilin_ike',
		author: 'tekinowi',
		description: '',
		image: '/fanart/pilin_ike_tekinowi.png'
	},
	{
		title: 'pokemon',
		author: 'tekinowi',
		description: '',
		image: '/fanart/pokemon_tekinowi.png'
	},
	{
		title: 'qualia',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/qualia_pipikewapi.jpg'
	},
	{
		title: 'realistic_face',
		author: 'tekinowi',
		description: '',
		image: '/fanart/realistic_face_tekinowi.png'
	},
	{
		title: 'realistic_smile',
		author: 'wali',
		description: '',
		image: '/fanart/realistic_smile_wali.png'
	},
	{
		title: 'satan',
		author: 'pq',
		description: '',
		image: '/fanart/satan_pq.png'
	},
	{
		title: 'scribble_2',
		author: 'sipiki',
		description: '',
		image: '/fanart/scribble_2_sipiki.png'
	},
	{
		title: 'scribble_3',
		author: 'sipiki',
		description: '',
		image: '/fanart/scribble_3_sipiki.png'
	},
	{
		title: 'scribble_4',
		author: 'sipiki',
		description: '',
		image: '/fanart/scribble_4_sipiki.png'
	},
	{
		title: 'scribble',
		author: 'sipiki',
		description: '',
		image: '/fanart/scribble_sipiki.png'
	},
	{
		title: 'seme_thumbnail',
		author: 'nyxoom',
		description: '',
		image: '/fanart/seme_thumbnail_nyxoom.png'
	},
	{
		title: 'silhouette',
		author: 'konako',
		description: '',
		image: '/fanart/silhouette_konako.png'
	},
	{
		title: 'sina_moli',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/sina_moli_pipikewapi.jpg'
	},
	{
		title: 'sina_sona',
		author: 'wren',
		description: '',
		image: '/fanart/sina_sona_wren.png'
	},
	{
		title: 'sinaseme',
		author: 'unknown',
		description: '',
		image: '/fanart/sinaseme_unknown.png'
	},
	{
		title: 'sitelen',
		author: 'sipiki',
		description: '',
		image: '/fanart/sitelen_sipiki.png'
	},
	{
		title: 'sitelen_suwi',
		author: 'jantenpi',
		description: '',
		image: '/fanart/sitelen_suwi_jantenpi.jpg'
	},
	{
		title: 'sitelen',
		author: 'wasowapa',
		description: '',
		image: '/fanart/sitelen_wasowapa.jpg'
	},
	{
		title: 'smash',
		author: 'tekinowi',
		description: '',
		image: '/fanart/smash_tekinowi.png'
	},
	{
		title: 'soweli_mute',
		author: 'wasowapa',
		description: '',
		image: '/fanart/soweli_mute_wasowapa.png'
	},
	{
		title: 'speedrun_hard',
		author: 'mi',
		description: '',
		image: '/fanart/speedrun_hard_mi.mp4'
	},
	{
		title: 'speedrun',
		author: 'jankita',
		description: '',
		image: '/fanart/speedrun_jankita.mp4'
	},
	{
		title: 'speen',
		author: 'sqec',
		description: '',
		image: '/fanart/speen_sqec.gif'
	},
	{
		title: 'spin',
		author: 'sqec',
		description: '',
		image: '/fanart/spin_sqec.mov'
	},
	{
		title: 'squidward',
		author: 'pipikewapi',
		description: '',
		image: '/fanart/squidward_pipikewapi.jpg'
	},
	{
		title: 'squiward',
		author: 'chantel',
		description: '',
		image: '/fanart/squiward_chantel.jpg'
	},
	{
		title: 'stage',
		author: 'menasewi',
		description: '',
		image: '/fanart/stage_menasewi.png'
	},
	{
		title: 'star',
		author: 'bowtie',
		description: '',
		image: '/fanart/star_bowtie.webp'
	},
	{
		title: 'star',
		author: 'janiseja',
		description: '',
		image: '/fanart/star_janiseja.png'
	},
	{
		title: 'star_smile_teacher_jan',
		author: 'aja',
		description: '',
		image: '/fanart/star_smile_teacher_jan_aja.png'
	},
	{
		title: 'starman_body',
		author: 'cuymacu',
		description: '',
		image: '/fanart/starman_body_cuymacu.png'
	},
	{
		title: 'stellated',
		author: 'dogikoko',
		description: '',
		image: '/fanart/stellated_dogikoko.png'
	},
	{
		title: 'supa_pimeja',
		author: 'squimp',
		description: '',
		image: '/fanart/supa_pimeja_squimp.png'
	},
	{
		title: 'sword',
		author: 'mi',
		description: '',
		image: '/fanart/sword_mi.png'
	},
	{
		title: 'tenpo_ike',
		author: 'pantemili',
		description: '',
		image: '/fanart/tenpo_ike_pantemili.png'
	},
	{
		title: 'tenpo_lete',
		author: 'nyxoom',
		description: '',
		image: '/fanart/tenpo_lete_nyxoom.png'
	},
	{
		title: 'tenpopimeja',
		author: 'wasomu',
		description: '',
		image: '/fanart/tenpopimeja_wasomu.mov'
	},
	{
		title: 'thinkan',
		author: 'janwali',
		description: '',
		image: '/fanart/thinkan_janwali.png'
	},
	{
		title: 'tloki_a',
		author: 'mi',
		description: '',
		image: '/fanart/tloki_a_mi.wav'
	},
	{
		title: 'tokia',
		author: 'mijetelo',
		description: '',
		image: '/fanart/tokia_mijetelo.jpg'
	},
	{
		title: 'truth',
		author: 'squimp',
		description: '',
		image: '/fanart/truth_squimp.png'
	},
	{
		title: 'upsidedown',
		author: 'sqec',
		description: '',
		image: '/fanart/upsidedown_sqec.png'
	},
	{
		title: 'utala',
		author: 'dogikoko',
		description: '',
		image: '/fanart/utala_dogikoko.png'
	},
	{
		title: 'utala_lape',
		author: 'akesinu',
		description: '',
		image: '/fanart/utala_lape_akesinu.jpg'
	},
	{
		title: 'utala_mun',
		author: 'chantel',
		description: '',
		image: '/fanart/utala_mun_chantel.jpg'
	},
	{
		title: 'vogue',
		author: 'akesinu',
		description: '',
		image: '/fanart/vogue_akesinu.mp4'
	},
	{
		title: 'warioware_1',
		author: 'abf',
		description: '',
		image: '/fanart/warioware_1_abf.png'
	},
	{
		title: 'warioware_2',
		author: 'abf',
		description: '',
		image: '/fanart/warioware_2_abf.png'
	},
	{
		title: 'warioware_3',
		author: 'abf',
		description: '',
		image: '/fanart/warioware_3_abf.png'
	},
	{
		title: 'warioware_4',
		author: 'abf',
		description: '',
		image: '/fanart/warioware_4_abf.png'
	},
	{
		title: 'warioware_5',
		author: 'abf',
		description: '',
		image: '/fanart/warioware_5_abf.png'
	},
	{
		title: 'what_is_love',
		author: 'nasaki',
		description: '',
		image: '/fanart/what_is_love_nasaki.gif'
	},
	{
		title: 'wile_unpa',
		author: 'ilonija',
		description: '',
		image: '/fanart/wile_unpa_ilonija.png'
	},
	{
		title: 'wink',
		author: 'sipiki',
		description: '',
		image: '/fanart/wink_sipiki.png'
	},
	{
		title: 'zvedza',
		author: 'sqec',
		description: '',
		image: '/fanart/zvedza_sqec.png'
	}
];

function createArtworkElement(title, image, author, description) {
	const placeholderDiv = document.createElement('div');
	placeholderDiv.className = 'placeholder';

	if (title) {
		const titleDiv = document.createElement('div');
		titleDiv.className = 'title';
		const titleParagraph = document.createElement('p');
		titleParagraph.textContent = title;
		titleDiv.appendChild(titleParagraph);
		placeholderDiv.appendChild(titleDiv);
	}

	const artDiv = document.createElement('div');
	artDiv.className = 'art';
	const artImage = document.createElement('img');
	artImage.src = image;
	artDiv.appendChild(artImage);
	placeholderDiv.appendChild(artDiv);

	if (author) {
		const creditDiv = document.createElement('div');
		creditDiv.className = 'credit';
		const creditParagraph = document.createElement('p');
		creditParagraph.textContent = `tan ${author}`;
		creditDiv.appendChild(creditParagraph);
		placeholderDiv.appendChild(creditDiv);
	}

	if (description) {
		const descriptionDiv = document.createElement('div');
		descriptionDiv.className = 'description';
		const descriptionParagraph = document.createElement('p');
		descriptionParagraph.textContent = description;
		descriptionDiv.appendChild(descriptionParagraph);
		placeholderDiv.appendChild(descriptionDiv);
	}
	return placeholderDiv;
}

function okay() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	if (h > w) {
		var art = document.getElementsByClassName('art');
		var art_i;
		for (art_i = 0; art_i < art.length; art_i++) {
			art[art_i].className += ' artmobile'; // WITH space added
		}
		var placeholder = document.getElementsByClassName('placeholder');
		var placeholder_i;
		for (placeholder_i = 0; placeholder_i < placeholder.length; placeholder_i++) {
			placeholder[placeholder_i].className += ' artmobile'; // WITH space added
		}
	} else {
		var art = document.getElementsByClassName('art');
		var art_i;
		for (art_i = 0; art_i < art.length; art_i++) {
			art[art_i].classList.remove('artmobile'); // WITH space added
		}
		var placeholder = document.getElementsByClassName('placeholder');
		var placeholder_i;
		for (placeholder_i = 0; placeholder_i < placeholder.length; placeholder_i++) {
			placeholder[placeholder_i].classList.remove('artmobile'); // WITH space added
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const galleryDiv = document.querySelector('.gallery');
	if (!galleryDiv) {
		console.error('No element with the class "gallery" was found.');
		return;
	}

	artworks.forEach((artwork) => {
		const artworkElement = createArtworkElement(
			artwork.title,
			artwork.image,
			artwork.author,
			artwork.description
		);
		galleryDiv.appendChild(artworkElement);
	});
});
