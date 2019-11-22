goog.provide('Levels')

Levels = [
  {
    players: [
      {
        startPos: {
          x: 27,
          y: 0
        }
      },
      {
        startPos: {
          x: 0,
          y: 0
        }
      }
    ],
    entities: [
      {
        type: 'pit',
        config: {
          height: 5,
          width: 6,
          x: 2,
          y: 1,
        }
      },
      {
        type: 'pit',
        config: {
          height: 5,
          width: 12,
          x: 5,
          y: 10,
        }
      },
      {
        type: 'penguin',
        config: {
          isVertical: false,
          startPos: {
            x: 5,
            y: 7
          },
          movementLength: 10,
          stepSize: .05
        }
      },
      {
        type: 'penguin',
        config: {
          isVertical: true,
          startPos: {
            x: 26,
            y: 4
          },
          movementLength: 5,
          stepSize: .05
        }
      },
      {
        type: 'wall',
        config: {
          height: 5,
          width: 2,
          x: 13,
          y: 1,
        }
      },
      {
        type: 'fence',
        config: {
          x: 20,
          y: 2,
          cells: [
            // first line
            [{
              right: true,
            }, {
              right: true,
              top: true,
            }],
            // second line
            [{
              left: true,
            }, {
              left: true,
              top: true,
            }]
          ],
        }
      },
      {
        type: 'table',
        config: {
          x: 1,
          y: 12,
          partType: 'wheels'
        }
      },
      {
        type: 'table',
        config: {
          x: 15,
          y: 1,
          partType: 'car-body'
        }
      },
      {
        type: 'present-box',
        config: {
          x: 22,
          y: 12,
          parts: [
            'car-body',
            'wheels'
          ]
        }
      },
      {
        type: 'platform',
        config: {
          isVertical: true,
          startPos: {
            x: 22,
            y: 4
          },
          height: 2,
          width: 3,
          movementLength: 5,
          stepSize: .07
        }
      },
      {
        type: 'ice',
        config: {
          height: 4,
          width: 7,
          x: 14,
          y: 5,
        }
      },
    ]
  },
  {
    players: [
      {
        startPos: {
          x: 27,
          y: 10
        }
      },
      {
        startPos: {
          x: 0,
          y: 0
        }
      }
    ],
    entities: [
      {
        type: 'pit',
        config: {
          height: 5,
          width: 6,
          x: 2,
          y: 1,
        }
      },
      {
        type: 'penguin',
        config: {
          isVertical: true,
          startPos: {
            x: 26,
            y: 4
          },
          movementLength: 5,
          stepSize: .05
        }
      },
      {
        type: 'table',
        config: {
          x: 22,
          y: 12,
          partType: 'wheels'
        }
      },
      {
        type: 'table',
        config: {
          x: 10,
          y: 1,
          partType: 'car-body'
        }
      },
      {
        type: 'present-box',
        config: {
          x: 15,
          y: 12,
          parts: [
            'car-body',
            'wheels'
          ]
        }
      },
    ]
  },
]
