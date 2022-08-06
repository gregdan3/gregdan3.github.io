BUILDDIR=build

PAGEDIR=pages
STATICDIR=static

PAGES=$(shell find $(PAGEDIR) -type f -name \*.md)
STATICS=$(shell find $(STATICDIR) -type f)

PAGES_BUILT=$(patsubst $(PAGEDIR)/%.md,$(BUILDDIR)/%.html,$(PAGES))
STATICS_BUILT=$(patsubst static/%,$(BUILDDIR)/%,$(STATICS))

MD_TO_HTML=theme
TEMPLATE=templates/default.html
FLAGS=-c style,fencedcode -t $(TEMPLATE)

DEVNAME=gregdan3-website

.PHONY: all clean dev stopdev

all: $(BUILDDIR)/blog/index.html $(BUILDDIR)/mind-map/index.html $(PAGES_BUILT) $(STATICS_BUILT) 

clean:
	rm -rf $(BUILDDIR)/*

$(BUILDDIR)/mind-map/index.html:
	@mkdir -p $(@D)
	./mapindex.sh | $(MD_TO_HTML) $(FLAGS) -p mind-map/index.html -o $@

$(BUILDDIR)/blog/index.html: 
	@mkdir -p $(@D)
	./blogindex.sh | $(MD_TO_HTML) $(FLAGS) -p blog/index.html -o $@

$(BUILDDIR)/%.html: $(PAGEDIR)/%.md $(TEMPLATE)
	@mkdir -p $(@D)
	$(MD_TO_HTML) $(FLAGS) -p $(patsubst $(BUILDDIR)/%,%,$@) -o $@ $<

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
