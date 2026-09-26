from PIL import Image
from pathlib import Path

folder = Path("public/images")

for file in folder.rglob("*.png"):
    try:
        img = Image.open(file)

        # Convert PNG photo to JPEG
        if img.mode in ("RGBA", "LA"):
            background = Image.new("RGB", img.size, "white")
            background.paste(img, mask=img.getchannel("A"))
            img = background
        else:
            img = img.convert("RGB")

        new_file = file.with_suffix(".jpg")

        img.thumbnail((2000, 2000))
        img.save(new_file, "JPEG", quality=80, optimize=True)

        print(f"Converted: {file} -> {new_file}")

    except Exception as e:
        print(f"Skipped {file}: {e}")

print("\nDONE!")