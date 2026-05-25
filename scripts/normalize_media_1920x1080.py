from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps


TARGET_W = 1920
TARGET_H = 1080


def normalize_to_1920x1080(path: Path) -> bool:
    with Image.open(path) as img:
        img = img.convert("RGBA") if img.mode in ("P", "LA") else img.convert("RGB")
        normalized = ImageOps.fit(
            img,
            (TARGET_W, TARGET_H),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5),
        )

        if normalized.size == img.size:
            return False

        normalized.save(path)
        return True


def main() -> None:
    media_dir = Path(__file__).resolve().parents[1] / "public" / "media"
    if not media_dir.exists():
        raise SystemExit(f"Missing folder: {media_dir}")

    updated = 0
    for path in sorted(media_dir.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in (".png", ".jpg", ".jpeg", ".webp"):
            continue
        if normalize_to_1920x1080(path):
            updated += 1
            print(f"Updated: {path.name}")

    print(f"Done. Updated {updated} file(s).")


if __name__ == "__main__":
    main()

