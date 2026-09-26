from PIL import Image
from pathlib import Path

folder = Path("public/images")

for file in folder.rglob("*"):
    if file.suffix.lower() not in [".jpg", ".jpeg"]:
        continue

    try:
        img = Image.open(file).convert("RGB")

        # Reduce dimensions while keeping good website quality
        img.thumbnail((1600, 1600))

        # Save compressed JPG
        img.save(file, "JPEG", quality=70, optimize=True)

        print("Compressed:", file)

    except Exception as e:
        print("Skipped:", file, e)

print("\nFINAL COMPRESSION DONE!")