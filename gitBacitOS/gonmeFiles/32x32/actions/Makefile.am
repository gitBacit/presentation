
size = 32x32
context = actions

iconsdir = $(themedir)/$(size)/$(context)

icons_DATA =				\
	address-book-new.png		\
	bookmark-new.png		\
	contact-new.png			\
	document-new.png		\
	document-open.png		\
	document-properties.png		\
	document-revert.png		\
	document-save.png		\
	document-save-as.png		\
	edit-cut.png			\
	edit-paste.png		\
	edit-select-all.png		\
	edit-redo.png			\
	edit-undo.png			\
	folder-new.png			\
	go-bottom.png			\
	go-down.png			\
	go-first.png			\
	go-home.png			\
	go-last.png			\
	go-next.png			\
	go-previous.png			\
	go-top.png			\
	go-up.png			\
	help-faq.png			\
	format-justify-center.png	\
	format-justify-fill.png		\
	format-justify-left.png		\
	format-justify-right.png	\
	list-add.png			\
	list-remove.png			\
	media-eject.png			\
	object-rotate-left.png	\
	object-rotate-right.png	\
	process-stop.png		\
	system-lock-screen.png		\
	system-run.png			\
	view-fullscreen.png		\
	view-restore.png		\
	view-sort-ascending.png		\
	view-sort-descending.png 	\
	window-new.png			\
	zoom-best-fit.png		\
	zoom-in.png			\
	zoom-original.png		\
	zoom-out.png

EXTRA_DIST =		\
	$(icons_DATA)

MAINTAINERCLEANFILES =	\
	Makefile.in

install-data-local: install-iconsDATA
	(cd $(DESTDIR)$(themedir)/$(size) && $(ICONMAP) -c $(context))

check:
	if test -r CVS/Entries; then \
		for icon in *.png; do \
			if grep $$icon CVS/Entries > /dev/null; then \
				if ! grep $$icon Makefile > /dev/null; then \
					echo "Missing $$icon in Makefile.am"; \
					exit 1; \
				fi; \
			fi; \
		done; \
	else \
		for icon in *.png; do \
			if ! grep $$icon Makefile > /dev/null; then \
				echo "Missing $$icon in Makefile.am"; \
				exit 1; \
			fi; \
		done; \
	fi
