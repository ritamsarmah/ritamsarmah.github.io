.PHONY: *

output_dir := output

build:
	./scripts/build

develop:
	./scripts/develop
	
clean:
	rm -rf $(output_dir)
