class Board:
    def __init__(self):
        self.board = [[0, 0, 0, 0],
                      [0, 0, 0, 0],
                      [0, 0, 0, 0],
                      [0, 0, 0, 0]]

    def __repr__(self):
        boardstr = ''
        for row in self.board:
            rowstr = ''
            for col in row:
                rowstr = rowstr + str(col) + '   '
            boardstr = boardstr + rowstr + '\n\n'

        return boardstr
    

gameboard = Board()

print(gameboard)
