import cv2
import numpy as np
import os

image_path = 'src/assets/huzaflix-casestudy-full.png'
output_dir = 'src/assets/'

img = cv2.imread(image_path)
if img is None:
    print(f"Error: Could not load image at {image_path}")
    exit(1)

# Convert to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold to isolate white screens
_, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)

# Find ALL contours (not just external)
contours, _ = cv2.findContours(thresh, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)

img_h, img_w = img.shape[:2]

count = 0
for cnt in contours:
    x, y, w, h = cv2.boundingRect(cnt)
    
    # Filter out small noise and the full-image bounding box itself
    if w > 500 and h > 500 and w < img_w * 0.9 and h < img_h * 0.9:
        # Check if the bounding box has a lot of white in it (to confirm it's a screen and not a random shape)
        mask_roi = thresh[y:y+h, x:x+w]
        white_ratio = cv2.countNonZero(mask_roi) / (w * h)
        
        if white_ratio > 0.8: # It's mostly white, likely a screen
            count += 1
            cropped = img[y:y+h, x:x+w]
            out_path = os.path.join(output_dir, f'huzaflix-screen-{count}.png')
            cv2.imwrite(out_path, cropped)
            print(f"Saved {out_path} (size: {w}x{h})")

print(f"Total screens extracted: {count}")
