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

import svgwrite

branches = 32
ticks = 128

drawing = svgwrite.Drawing("out.svg", profile="tiny")

for branch in range(branches):
    twig = [
        (0.0, 0.0, 0.0),
    ]
    for tick in range(ticks):
        twig.append(
            (
                twig[-1][0] + random.random(),
                twig[-1][1] + random.random(),
                twig[-1][2] + random.random(),
            )
        )

    for index, node in enumerate(twig):
        if index == 0:
            continue
        x0, y0, z0 = twig[index - 1]
        x1, y1, z1 = node
        drawing.add(
            drawing.line(
                (x0, y0),
                (x1, y1),
                stroke=svgwrite.rgb(10, 10, 16, "%"),
            )
        )
    drawing.save()
    break
