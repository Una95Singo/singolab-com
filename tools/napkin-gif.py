#!/usr/bin/env python3
"""Napkin GIF for EP3 'Goal for All Africa' — the by-hand bigram count.
Counts the pairs after the word 'the' across three lines, then turns the
tally into chances (2/3 and 1/3), mirroring the article's napkin maths.
Rendered in singolab.com's warm near-black editorial palette."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "public", "demos", "commentator", "napkin.gif")
W, H = 900, 560
# palette (dark theme tokens from globals.css)
BG      = (21, 18, 14)      # #15120e
PANEL   = (28, 24, 18)      # #1c1812
INK     = (241, 235, 224)   # #f1ebe0
INK2    = (190, 180, 165)   # #beb4a5
INK3    = (138, 128, 115)   # #8a8073
ACCENT  = (122, 160, 255)   # #7aa0ff
WARM    = (255, 148, 96)    # #ff9460
GREEN   = (95, 207, 128)    # #5fcf80
LINE    = (52, 48, 42)

MONO  = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
MONOB = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
def f(p, s): return ImageFont.truetype(p, s)

serif_kick = f(SERIF, 16)
serif_h    = f(SERIF, 30)
mono       = f(MONO, 24)
monob      = f(MONOB, 24)
mono_sm    = f(MONO, 19)
monob_sm   = f(MONOB, 19)
mono_xs    = f(MONO, 15)

LINES = ["the striker shoots", "the keeper saves", "the striker shoots and scores"]
# the -> striker (lines 0,2), the -> keeper (line 1)
NEXT = ["striker", "keeper", "striker"]

def base():
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    # subtle grid
    for x in range(0, W, 42):
        d.line([(x, 0), (x, H)], fill=(26, 23, 18))
    for y in range(0, H, 42):
        d.line([(0, y), (W, y)], fill=(26, 23, 18))
    # header
    d.text((50, 36), "LEARNING AI OUT LOUD · EP3", font=serif_kick, fill=ACCENT)
    d.text((50, 58), "Count the pairs, then turn them into chances", font=serif_h, fill=INK)
    d.line([(50, 110), (W - 50, 110)], fill=LINE, width=1)
    return img, d

def draw_tape(d, hi_line=None, hi_pair=False):
    """Left column: the three lines, optionally highlighting a line's 'the X' pair."""
    d.text((50, 130), "THE TAPE", font=mono_xs, fill=INK3)
    y = 162
    for i, ln in enumerate(LINES):
        toks = ln.split()
        x = 50
        # start sentinel
        d.text((x, y), "▸", font=mono_sm, fill=INK3); x += 22
        for j, t in enumerate(toks):
            box = (hi_line == i and hi_pair and j < 2)
            col = INK
            if box:
                w = d.textlength(t, font=monob_sm)
                d.rounded_rectangle([x - 4, y - 3, x + w + 4, y + 24], radius=5,
                                    fill=(WARM if j == 0 else (60, 50, 38)))
                col = (26, 18, 11) if j == 0 else WARM
                d.text((x, y), t, font=monob_sm, fill=col)
                x += w + 12
            else:
                w = d.textlength(t, font=mono_sm)
                d.text((x, y), t, font=mono_sm, fill=(INK if (hi_line is None or hi_line == i) else INK3))
                x += w + 10
        d.text((x, y), "▮", font=mono_sm, fill=INK3)
        y += 40

def draw_counts(d, n_striker, n_keeper):
    """Right column: tally for the 'the' row building up."""
    x0 = 500
    d.text((x0, 130), "AFTER “the” →", font=mono_xs, fill=INK3)
    # striker row
    y = 168
    d.text((x0, y), "striker", font=mono_sm, fill=INK)
    tx = x0 + 130
    for k in range(n_striker):
        d.line([(tx + k * 16, y + 2), (tx + k * 16, y + 22)], fill=WARM, width=4)
    if n_striker:
        d.text((tx + 60, y), f"×{n_striker}", font=monob_sm, fill=WARM)
    # keeper row
    y = 210
    d.text((x0, y), "keeper", font=mono_sm, fill=INK)
    tx = x0 + 130
    for k in range(n_keeper):
        d.line([(tx + k * 16, y + 2), (tx + k * 16, y + 22)], fill=WARM, width=4)
    if n_keeper:
        d.text((tx + 60, y), f"×{n_keeper}", font=monob_sm, fill=WARM)
    tot = n_striker + n_keeper
    if tot:
        d.text((x0, 252), f"count(the) = {tot}", font=mono_xs, fill=INK3)

def draw_chances(d, reveal):
    """Bottom: counts -> chances with bars. reveal in 0..1 controls bar width."""
    y0 = 330
    d.line([(50, y0 - 16), (W - 50, y0 - 16)], fill=LINE, width=1)
    d.text((50, y0 - 8), "TURN COUNTS INTO CHANCES", font=mono_xs, fill=GREEN)
    d.text((50, y0 + 18), "P(next | the) = count(the, next) ÷ count(the)",
           font=mono_sm, fill=INK2)

    rows = [("striker", 2, 3, "2/3"), ("keeper", 1, 3, "1/3")]
    bx = 50; bw = 560; y = y0 + 70
    for name, num, den, frac in rows:
        p = num / den
        d.text((bx, y), name, font=mono_sm, fill=INK)
        track_x = bx + 130
        d.rounded_rectangle([track_x, y, track_x + bw, y + 26], radius=6, fill=PANEL)
        fillw = int(bw * p * reveal)
        if fillw > 4:
            d.rounded_rectangle([track_x, y, track_x + fillw, y + 26], radius=6, fill=GREEN)
        d.text((track_x + bw + 18, y), frac, font=monob_sm, fill=GREEN)
        if reveal >= 1:
            d.text((track_x + bw + 78, y + 2), f"≈ {round(p*100)}%", font=mono_xs, fill=INK3)
        y += 44

def frame(hi_line=None, hi_pair=False, ns=0, nk=0, chances=None):
    img, d = base()
    draw_tape(d, hi_line, hi_pair)
    draw_counts(d, ns, nk)
    if chances is not None:
        draw_chances(d, chances)
    # footer
    d.text((50, H - 34), "▸ the striker shoots ▮   ·   an honest bigram",
           font=mono_xs, fill=INK3)
    return img

frames, durations = [], []
def add(img, ms): frames.append(img); durations.append(ms)

# 1. tape appears
add(frame(), 1100)
# 2. slide + count, line by line
ns = nk = 0
for i in range(3):
    add(frame(hi_line=i, hi_pair=True, ns=ns, nk=nk), 650)   # highlight pair
    if NEXT[i] == "striker": ns += 1
    else: nk += 1
    add(frame(hi_line=i, hi_pair=True, ns=ns, nk=nk), 700)   # tally lands
# 3. full counts hold
add(frame(ns=2, nk=1), 1100)
# 4. chances grow
for r in (0.0, 0.34, 0.67, 1.0):
    add(frame(ns=2, nk=1, chances=r), 360)
# 5. final hold (loop pause)
add(frame(ns=2, nk=1, chances=1.0), 2200)

frames[0].save(OUT, save_all=True, append_images=frames[1:], duration=durations,
               loop=0, optimize=True, disposal=2)
print("wrote", os.path.normpath(OUT), "| frames:", len(frames), "| total ms:", sum(durations))
