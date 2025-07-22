#!/usr/bin/env bash

# -- Globals -- #

declare -A project_names
project_names["accelerate"]="Accelerate"

input_dir="content"
output_dir="output"

# -- Functions -- #

create_output_path() {
  # Replace input dir and extension
  echo "$output_dir/$(echo "$1" | sed -e "s/^$input_dir\///" -e 's/\.md$/.html/')"
}

slugify() {
  # Remove input dir and extension
  local page=$(echo "$1" | sed -e "s/^$input_dir\///" -e 's/\.[^.]*$//')

  if [[ "$page" == "index" ]]; then
    echo "/"
  elif [[ "$page" == */index ]]; then
    echo "/${page%index}"
  else
    echo "/$page/"
  fi
}

build() {
  cp -r static/* output 2>/dev/null

  # Default

  echo -e "[default]"

  local pages=$(fd . $input_dir --maxdepth 1 --extension md)

  for page in $pages; do
    local output_path=$(create_output_path $page)
    local slug=$(slugify $page)

    echo $slug

    pandoc "$page" \
      --standalone \
      --template templates/default.html \
      --metadata "slug:$slug" \
      --metadata "site_name:Ritam Sarmah" \
      --metadata "stylesheet:default" \
      --metadata-file site.yaml \
      --output "$output_path"
  done

  # Projects

  local paths=$(fd . $input_dir/projects --maxdepth 1 --type directory)

  for path in $paths; do
    local project=$(basename $path)
    local pages=$(fd . "$path" --extension md)
    local index="${path#*/}"

    echo -e "\n[$project]"

    for page in $pages; do
      local output_path=$(create_output_path $page)
      local slug=$(slugify $page)

      echo $slug
      mkdir -p `dirname $output_path`

      pandoc "$page" \
        --standalone \
        --template "templates/project.html" \
        --metadata "project:$project" \
        --metadata "slug:$slug" \
        --metadata "site_name:${project_names[$project]}" \
        --metadata "stylesheet:$project" \
        --metadata-file site.yaml \
        --output "$output_path"
    done
  done
}

echo -e "\n*** Build ***\n"

rm -rf "$output_dir"
mkdir -p "$output_dir"
build
