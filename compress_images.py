from PIL import Image
from pathlib import Path

folder = Path("public/images")

for file in folder.rglob("*"):
    if file.suffix.lower() not in [".jpg", ".jpeg", ".png"]:
        continue

    try:
        img = Image.open(file)

        # Convert PNG to JPG only if it doesn't need transparency
        if file.suffix.lower() in [".jpg", ".jpeg"]:
            img = img.convert("RGB")
            img.thumbnail((2500, 2500))
            img.save(file, "JPEG", quality=82, optimize=True)

        elif file.suffix.lower() == ".png":
            # Keep PNG format so your website paths don't change
            img.save(file, "PNG", optimize=True)

        print(f"Compressed: {file}")

    except Exception as e:
        print(f"Skipped {file}: {e}")

print("\nDONE! All images processed.")