.PHONY: build develop clean

output_dir := output

build:
	./scripts/build.sh

develop:
	./scripts/develop.sh

clean:
	rm -rf $(output_dir)
	mkdir -p $(output_dir)
