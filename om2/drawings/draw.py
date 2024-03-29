"""
1. render N twigs from root, twisting and growing upwards towards sun
2. rotate twigs
3. capture frame
4. move camera
5. loop
6. mush all frames into mp4
..
etc. play with growth algorithm and camera
later: interactive shader
"""

import random


canvas = (400.0, 400.0)
header = (
    f"<svg xmlns='http://www.w3.org/2000/svg' "
    f"width='{canvas[0]}' "
    f"height='{canvas[1]}' "
    ">"
)
footer = "</svg>"
svg_elements = []

branches = 32
ticks = 256

for branch in range(branches):
    twig = [
        (
            canvas[0] / 2,
            canvas[1],
            0.0,
        ),
    ]
    for tick in range(ticks):
        twig.append(
            (
                twig[-1][0] + 10 * random.random() * random.choice((-1, 1)),
                twig[-1][1] - 10 * random.random(),
                twig[-1][2] + 10 * random.random(),
            )
        )

    for index, node in enumerate(twig):
        if index == 0:
            continue
        x1, y1, z1 = twig[index - 1]
        x2, y2, z2 = node
        svg_elements.append(
            f"<line x1='{x1}' y1='{y1}' x2='{x2}' y2='{y2}' stroke='black' />"
        )

with open("out.svg", "w") as outfile:
    outfile.write(header + "".join(svg_elements) + footer)
