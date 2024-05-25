# Generate favicon files
# Based on https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs

SVG="${1}"
if [ ! -f "${SVG}" ]; then
    echo "Error: SVG file does not exist"
    exit 1
fi

# Create ICO
convert -background none -density 256x256 -define icon:auto-resize=32,16 "${SVG}" favicon.ico

# Create PNG
convert "${SVG}" -resize 512x512 icon-512.png
convert "${SVG}" -resize 192x192 icon-192.png

# Create Apple Touch Icon
convert "${SVG}" -resize 180x180 apple-touch-icon.png
# convert -background none -density 180x180 -resize 140x140 -gravity center -extent 180x180 "${SVG}" apple-touch-icon.png
