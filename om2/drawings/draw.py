"""
1. render N twigs from root, twisting and growing upwards towards sun
2. rotate twigs
3. capture frame
4. move camera
5. loop
6. mush all frames into mp4
..
etc. play with growth algorithm and camera
wind blows heavier stems
later: interactive shader
"""

import random


canvas = (400.0, 400.0, 400.0)
header = (
    "<svg xmlns='http://www.w3.org/2000/svg' "
    f"width='{canvas[0]}' "
    f"height='{canvas[1]}' "
    ">"
)
footer = "</svg>"
svg_elements = []

stems = 128
nodes = 64

for stem in range(stems):
    twigs = [(0.0, 0.0, 0.0, 0.0)]  # x, y, z, diameter
    for node in range(nodes):
        twigs.append(
            (
                twigs[-1][0] + 10 * random.random() * random.choice((-1, 1)),
                twigs[-1][1] + 10 * random.random() * random.choice((-1, 1)),
                twigs[-1][2] + 10 * random.random(),
                nodes / (node + 1) * 0.1,
            )
        )

    for index, twig in enumerate(twigs):
        if index == 0:
            continue
        x1, y1, z1, w1 = twigs[index - 1]
        x2, y2, z2, w2 = twig
        svg_elements.append(
            "<line "
            f"x1='{x1 + canvas[0] / 2}' y1='{-z1 + canvas[2]}' "
            f"x2='{x2 + canvas[0] / 2}' y2='{-z2 + canvas[2]}' "
            f"stroke='darkgreen' "
            ">"
            "<animate "
            "attributeName='stroke-width' "
            f"values='0;{w2};0' "
            "dur='1024s' "
            "repeatCount='indefinite' "
            "/>"
            "</line>"
        )

with open("out.svg", "w") as outfile:
    outfile.write(header + "".join(svg_elements) + footer)
