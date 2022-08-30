BUILDDIR=build

PAGEDIR=pages
STATICDIR=static

PAGES=$(shell find $(PAGEDIR) -type f -name \*.md)
STATICS=$(shell find $(STATICDIR) -type f)
TEMPLATE=templates/default.html

PAGES_BUILT=$(patsubst $(PAGEDIR)/%.md,$(BUILDDIR)/%.html,$(PAGES))
STATICS_BUILT=$(patsubst static/%,$(BUILDDIR)/%,$(STATICS))

MD_TO_HTML=theme -c style,fencedcode -t $(TEMPLATE)
MINIFIER=htmlmin --remove-comments --remove-all-empty-space
MAPPER=markmap --no-open

DEVNAME=gregdan3-website

.PHONY: all clean dev stopdev

all: $(BUILDDIR)/blog/index.html $(BUILDDIR)/mind-map/index.html $(PAGES_BUILT) $(STATICS_BUILT) 

clean:
	rm -rf $(BUILDDIR)/*

$(BUILDDIR)/mind-map/index.html:
	@mkdir -p $(@D)
	./mapindex.sh | $(MD_TO_HTML) -p mind-map/index.html -o $@
	$(MINIFIER) $@ $@

$(BUILDDIR)/blog/index.html: 
	@mkdir -p $(@D)
	./blogindex.sh | $(MD_TO_HTML) -p blog/index.html -o $@
	$(MINIFIER) $@ $@

$(BUILDDIR)/toki-pona/ilo/map.html:
	@mkdir -p $(@D)
	$(MAPPER) pages/toki-pona/ilo/map.md -o $@
	$(MINIFIER) $@ $@

$(BUILDDIR)/%.html: $(PAGEDIR)/%.md $(TEMPLATE)
	@mkdir -p $(@D)
	$(MD_TO_HTML) -p $(patsubst $(BUILDDIR)/%,%,$@) -o $@ $<
	$(MINIFIER) $@ $@

$(BUILDDIR)/%: $(STATICDIR)/%
	@mkdir -p $(@D)
	cp -r $< $@

dev: stopdev
	docker rm $(DEVNAME) | true
	docker run \
		-d \
		-p 80:80 \
		-p 443:443 \
		--expose 80 \
		--expose 443 \
		-v $(PWD)/$(BUILDDIR):/usr/local/apache2/htdocs \
		--name $(DEVNAME) \
		httpd:2

stopdev:
	docker kill $(DEVNAME) | true
