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

import matplotlib.pyplot as plt

shoots = 32
ticks = 128

for shoot in range(shoots):
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

    fig = plt.figure()
    axis = fig.add_subplot(projection="3d")
    for node in twig:
        x, y, z = node
        axis.plot(x, y, z, marker="o")

    plt.show()

    break
