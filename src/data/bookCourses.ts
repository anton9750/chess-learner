// Kurser 26 og frem: lærestof inspireret af bogen "How to Win at Chess"
// (Levy Rozman). Teksten er omskrevet med egne ord, og alle diagrammerne er
// genopbygget som FEN-stillinger, så de vises af appens egen PositionDiagram.
// Filen er genereret – ret i kilden (gen/), ikke her, hvis du vil beholde strukturen.
import type { Course } from "./courses";

export const bookCourses: Course[] = [
  {
    id: 26,
    title: "The Board, Coordinates and Starting Position",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      instruction: "You're White in the starting position. Take the centre by moving your king's pawn two squares, from e2 to the 4th rank.",
      solutions: ["e4"],
      success: "e4! You used the square name to find the right pawn and claimed the centre with it — the most popular first move in chess.",
    },
    slides: [
      "Chess is roughly 1,500 years old and traces back to sixth-century India. The modern board is an 8 x 8 grid of 64 squares that alternate light and dark. Set it up so that each player has a light square in the bottom-right corner (and a dark one in the bottom-left). If your corner square is the wrong colour, the board is turned the wrong way round.",
      {
        text: "Every square has an address, like a point on a road map. The vertical columns are called files and are lettered a to h from left to right. The horizontal rows are called ranks and are numbered 1 to 8 from bottom to top. A square's name is always the file letter first and the rank number second, so the highlighted square here is f6.",
        diagram: {
          fen: "7k/8/8/8/8/8/8/K7 w - - 0 1",
          caption: "Files run a–h, ranks run 1–8. The highlighted square is the intersection of the f-file and the 6th rank: f6.",
          highlights: ["f6"],
        },
      },
      {
        text: "Each side starts with 16 pieces, 32 in total. White sits on ranks 1 and 2 and Black on ranks 7 and 8. The pawns fill the second row and the major pieces stand behind them. The setup is mirrored: the queens start on the d-file and the kings on the e-file, and each queen begins on a square of her own colour.",
        diagram: {
          fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
          caption: "The starting position. A handy memory aid: the queen goes on her own colour (white queen on a light square, black queen on a dark one).",
        },
      },
      "Players take turns, one move each, and White always moves first. Every game begins from this same position, and every one of the thousands of possible games branches away from it.\n\nBefore memorising anything else, it helps to understand that a game of chess can be won in only a handful of ways (we cover them in the Four Ways to Win course). Learning the game starting from a nearly empty board, with just a few pieces, is far easier than facing all 32 at once.",
      "Practical habit: when you play on a real board, say the square names out loud as you move (\"knight to f3\"). Online boards often print the coordinates in the margins; real boards usually don't, so it is worth learning them early. Once you can see the board as a grid of names, notation, books, and lessons all become easy to follow.",
    ],
  },
  {
    id: 27,
    title: "How Each Piece Moves and What It Is Worth",
    level: "0-800",
    puzzle: {
      fen: "7k/8/4q3/8/3N4/8/8/K7 w - - 0 1",
      instruction: "You're White. Your knight on d4 can capture the black queen on e6. Play it.",
      solutions: ["Nxe6"],
      success: "Nxe6! The knight jumped in an L-shape and took the most valuable piece on the board. Queens can be vulnerable to the humblest-looking pieces.",
    },
    slides: [
      {
        text: "The queen is the strongest piece and is worth about 9 points. She moves any number of squares along ranks, files and diagonals, but she cannot jump over pieces, not even her own. From a central square on an open board she reaches more squares than any other piece.",
        diagram: {
          fen: "k7/8/8/8/3Q4/8/8/7K w - - 0 1",
          caption: "A queen on d4 can slide along all eight directions until she hits something. Highlighted: every square she can reach.",
          highlights: ["a1", "a4", "a7", "b2", "b4", "b6", "c3", "c4", "c5", "d1", "d2", "d3", "d5", "d6", "d7", "d8", "e3", "e4", "e5", "f2", "f4", "f6", "g1", "g4", "g7", "h4", "h8"],
        },
      },
      {
        text: "The rook is worth 5 points. It moves any number of squares up, down, left or right, again without jumping. Rooks like open files and ranks, and each player starts with two of them.",
        diagram: {
          fen: "k7/8/8/8/3R4/8/8/7K w - - 0 1",
          caption: "A rook controls a cross: the whole d-file and the whole 4th rank.",
          highlights: ["a4", "b4", "c4", "d1", "d2", "d3", "d5", "d6", "d7", "d8", "e4", "f4", "g4", "h4"],
        },
      },
      {
        text: "The bishop is worth 3 points and moves any distance diagonally. Because of that, a bishop stays on one colour of square forever: your light-squared bishop never touches a dark square. Each player starts with one of each.",
        diagram: {
          fen: "k7/8/8/8/3B4/8/8/7K w - - 0 1",
          caption: "A bishop on d4 sees two long diagonals. It can never reach the squares that are the opposite colour.",
          highlights: ["a1", "a7", "b2", "b6", "c3", "c5", "e3", "e5", "f2", "f6", "g1", "g7", "h8"],
        },
      },
      {
        text: "The knight is also worth 3 points, and it is unique in two ways: it moves in an L-shape (two squares in one direction and one square sideways), and it is the only piece that can jump over others. That jumping is why a knight can come out on move one while the other back-rank pieces are still stuck behind pawns. A knight in the middle of the board reaches eight squares; in a corner only two.",
        diagram: {
          fen: "k7/8/8/8/3N4/8/8/7K w - - 0 1",
          caption: "The eight squares a knight on d4 can jump to. Compare that with a knight on a1, which has only two moves.",
          highlights: ["b3", "b5", "c2", "c6", "e2", "e6", "f3", "f5"],
        },
      },
      {
        text: "The king is the piece you can never lose, so it has no point value. It moves one square in any direction, but never onto a square where it could be captured. That rule is why kings can never stand next to each other.",
        diagram: {
          fen: "k7/8/8/8/4K3/8/8/8 w - - 0 1",
          caption: "The white king on e4 has up to eight neighbouring squares. The game ends when your king is attacked and cannot escape (checkmate).",
          highlights: ["d3", "d4", "d5", "e3", "e5", "f3", "f4", "f5"],
        },
      },
      "Point values are only a rough exchange rate: queen 9, rook 5, bishop 3, knight 3, pawn 1. A good rule of thumb is to avoid trading a higher-valued piece for a lower-valued one, such as giving up a rook (5) for a knight (3), unless it wins the game some other way. Pieces are also worth more or less depending on the position, which you will learn about in later courses.",
    ],
  },
  {
    id: 28,
    title: "Pawns: Moves, Captures, Promotion and En Passant",
    level: "0-800",
    puzzle: {
      fen: "4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 1",
      instruction: "You're White. Black has just pushed the pawn from d7 to d5, right next to your e5 pawn. Capture it en passant.",
      solutions: ["exd6"],
      success: "exd6! The pawn took 'in passing' and ended up on d6, not d5. Remember, this option lasts for one move only.",
    },
    slides: [
      "Pawns are worth 1 point each, and every player starts with eight. A pawn moves straight forward one square at a time. On its very first move, and only then, it may instead advance two squares. Pawns can never move backward, and they cannot capture the piece directly in front of them. A blocked pawn simply sits there.",
      {
        text: "Pawns capture differently from how they move: one square diagonally forward. A pawn cannot move diagonally to an empty square, and it cannot capture straight ahead. This is the single most common point of confusion for new players, so check it twice.",
        diagram: {
          fen: "k7/8/8/3ppp2/4P3/8/8/7K w - - 0 1",
          caption: "The white pawn on e4 can capture on d5 or f5 (diagonally), but it cannot capture the pawn on e5 straight ahead; it is simply blocked.",
          highlights: ["d5", "f5", "e5"],
        },
      },
      "When a pawn reaches the far side of the board (the 8th rank for White, the 1st rank for Black) it promotes: it must turn into a knight, bishop, rook or queen of the same colour. You almost always choose a queen, because it is the strongest piece. In theory, a player could promote all eight pawns and end up with nine queens. Choosing a knight instead (an 'underpromotion') is only right in rare tactical situations.",
      {
        text: "The bonus rule is en passant, French for 'in passing', and it is the strangest rule in chess. Suppose your pawn has already reached the 5th rank (as White), and your opponent's pawn on the neighbouring file jumps two squares from its starting square and lands right beside yours. You may capture it as if it had moved only one square, and your pawn lands on the square it skipped over.",
        diagram: {
          fen: "4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 1",
          caption: "Black has just played ...d7–d5, landing next to the white pawn on e5. White may capture en passant: e5 takes on d6, removing the pawn on d5.",
          highlights: ["d6", "d5"],
        },
      },
      "There are three catches. First, the right to capture en passant lasts for exactly one turn: if you don't do it immediately, the chance is gone. Second, it only applies to pawns capturing pawns, and only after a two-square first move. Third, it's the one capture in chess where the capturing piece does not land on the square of the captured piece.",
    ],
  },
  {
    id: 29,
    title: "Castling, Check and Stalemate Basics",
    level: "0-800",
    puzzle: {
      fen: "r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1",
      instruction: "You're White and all castling rights are intact. Castle kingside to tuck the king into the corner.",
      solutions: ["O-O"],
      success: "O-O! King to g1, rook to f1: the king is safer and the rook is nearer the middle in a single move.",
    },
    slides: [
      {
        text: "Castling is the one move that moves two pieces at once. The king slides two squares toward a rook and that rook jumps over to the other side of the king. It tucks the king into a safer corner and brings a rook toward the middle, which is why strong players castle in almost every game.",
        diagram: {
          fen: "4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1",
          caption: "White has not moved the king or either rook, so both castles are possible: short (kingside) puts the king on g1 and rook on f1, long (queenside) puts the king on c1 and rook on d1.",
          highlights: ["g1", "f1", "c1", "d1"],
        },
      },
      "You may castle only if all of the following are true: the king has never moved; the rook you are castling with has never moved; there are no pieces between them; and the king is not in check, does not pass through an attacked square, and does not land on an attacked square. Castling toward the h-file rook is called short or kingside castling (written O-O), and toward the a-file rook is long or queenside castling (O-O-O).",
      {
        text: "A king is in check when an enemy piece attacks it. You must respond immediately, and any move that leaves your king in check is illegal. There are exactly three ways out: move the king to a safe square, block the attack with another piece (not possible against knights or adjacent pieces), or capture the attacking piece. Here the bishop gives check along the diagonal.",
        diagram: {
          fen: "4k3/8/8/8/1b6/8/8/4K3 w - - 0 1",
          caption: "The black bishop on b4 gives check to the white king on e1 along the b4–e1 diagonal. White can step aside or block on c3 or d2 with a piece.",
          highlights: ["b4", "e1"],
        },
      },
      "Because a king may never move into check, it also cannot capture a piece that is protected. This is the heart of every checkmate pattern in the courses ahead.\n\nStalemate is the flip side: the player to move is not in check but has no legal move at all. That is a draw, not a win for the player who is being stalemated or for the stalemating side. Careless stalemates are the most common way that winning positions slip away at the beginner level, so watch for them whenever you are far ahead.",
    ],
  },
  {
    id: 30,
    title: "Chess Notation Made Simple",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
      instruction: "You're White after 1. e4 e5. Play the next move written as 2. Nf3.",
      solutions: ["Nf3"],
      success: "2. Nf3! You read the notation correctly: N for knight, f3 for the square. That move also attacks the e5 pawn.",
    },
    slides: [
      "Notation is the shorthand used to record moves in books, databases and engines. You don't need it to play, but it is essential for learning from any chess material. It builds on what you already know: every move is written as the piece letter followed by the square it moves to. The letters are K for king, Q for queen, R for rook, B for bishop and N for knight (K is already taken by the king). Pawn moves have no letter at all, so 'e6' means a pawn moved to e6.",
      {
        text: "Moves are numbered, and White's move comes first, followed by Black's. After the pawn goes to d4 and Black answers with the same, the first line of a game reads '1. d4 d5'. Then 2. Bf4 means White's bishop went to f4, and 2...Nc6 means Black's knight went to c6.",
        diagram: {
          fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq - 2 3",
          caption: "After 1. d4 d5 2. Bf4 Nc6. The number goes with White's move; Black's reply follows on the same line.",
        },
      },
      "A few extra symbols complete the system. An 'x' means a capture: Qxd2 is a queen capturing on d2, and for pawns you give the file the pawn came from, like exd5. A plus sign (+) means check and a hash (#) means checkmate. Castling is written O-O for kingside and O-O-O for queenside, and promotion uses an equals sign, so g8=Q is a pawn reaching g8 and becoming a queen.",
      {
        text: "What if two identical pieces can both reach the same square? Then you add the starting file (or rank) of the piece that is moving. In the diagram, both knights can go to e6, so White writes Nfe6 for the f-file knight or Nde6 for the d-file knight. If the pieces share a file, the rank number is used instead, as in N2d3.",
        diagram: {
          fen: "k7/8/8/8/3N1N2/8/8/7K w - - 0 1",
          caption: "Both white knights (d4 and f4) can jump to e6, so a file letter is added: Nde6 or Nfe6.",
          highlights: ["d4", "f4", "e6"],
        },
      },
      "Practice makes this feel natural: replay a famous game from a book or website, move by move, until you can follow the notation without thinking. A sensible next step after that is to record your own games, because you cannot review your mistakes if you can't see what you played.",
    ],
  },
  {
    id: 31,
    title: "Scoring, Ratings and How to Practice",
    level: "0-800",
    puzzle: {
      fen: "6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1",
      instruction: "You're White. Black's king is trapped behind its own pawns. Find mate in one.",
      solutions: ["Re8"],
      success: "Re8#! A back-rank mate. The rook attacks along the whole rank and the black pawns take away every escape square.",
    },
    slides: [
      "A game ends in a win, a loss or a draw. In tournaments a win scores 1 point, a draw scores half a point for each player, and a loss scores 0. Some events have tried awarding 3 points for a win and 1 for a draw to discourage the very short grandmaster draws that fans dislike.",
      "Your skill is measured by a rating called Elo, named after the Hungarian-American physics professor Arpad Elo. It rises when you beat stronger players and falls when you lose to weaker ones. The lowest rating is 100. The highest over-the-board rating ever reached was Magnus Carlsen's 2882 in 2014. Online ratings differ from site to site, and FIDE (the international federation) maintains the most official over-the-board rating.",
      "There is no substitute for playing lots of games from beginning to end. Time controls vary enormously: bullet might give one minute for the whole game, blitz about three minutes, and classical chess several hours per side. Faster games give more practice; longer games let you think more deeply. Both help, but the clock is part of the game, so get used to managing it.",
      "Review is as important as play. A chess engine such as Stockfish (rated about 3700, far above any human) will tell you what the best move was, but it won't explain why. A stronger player or coach can both spot your mistakes and explain the idea behind them. If you use an engine, make it your job to work out the reason behind its suggestions.",
      {
        text: "Puzzles are positions with a specific solution, made to train one pattern at a time. The simplest kind is 'mate in one': find the single move that checkmates. As you get stronger, the puzzles get longer, until you may need to see more than five moves ahead for both sides. Here is a first mate in one to try.",
        diagram: {
          fen: "6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1",
          caption: "White to move: Black's king is boxed in by its own pawns on the back rank. Can you find the move that ends the game?",
          highlights: ["e1"],
        },
      },
      "Bots are a mixed tool. They can reduce the stress of playing a person, but they usually do not play like humans, and some are built to blunder to let you win. A healthy mix is playing real opponents, reviewing every game, and solving puzzles on the themes you keep missing.",
    ],
  },
  {
    id: 32,
    title: "The Four Ways to Win a Game",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 2",
      instruction: "You're Black after 1. f3 e5 2. g4. Deliver the fastest checkmate in chess.",
      solutions: ["Qh4#"],
      success: "Qh4#! The Fool's Mate. The white king can't run, block or capture. Make sure you never let your own king's diagonal open like that.",
    },
    slides: [
      {
        text: "Checkmate is the most important way to win: the enemy king is attacked and has no escape, no way to block and no way to capture the attacker. Only three pieces are needed on the board for checkmate (the two kings and one more piece can sometimes manage, as in a queen supported by her king), and checkmate can happen with all pieces still on the board.",
        diagram: {
          fen: "7k/6Q1/6K1/8/8/8/8/8 b - - 0 1",
          caption: "The simplest checkmate: the black king is attacked by the queen and cannot capture her because the white king protects her.",
        },
      },
      "Checkmate can come very early. The famous Scholar's Mate takes only four moves, and the even faster Fool's Mate ends the game in two. We study both in the opening courses. The main message for now: a king caught in the middle of the board with its protectors gone can be mated at any time.",
      {
        text: "The Fool's Mate is the quickest possible checkmate. White has played two weakening pawn moves, f3 and g4, opening the diagonal to the king, and the black queen drops down to h4 with mate. Nothing can block the diagonal or capture the queen, and the king has no flight square.",
        diagram: {
          fen: "rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3",
          caption: "After 1. f3 e5 2. g4 Qh4#: the shortest game of chess that can end in checkmate.",
        },
      },
      "The second most common result is resignation, meaning a player concedes by clicking a button online or offering a handshake at the board. Top players resign when the position is clearly lost, and it is considered polite. Below master level you should not resign out of politeness: while there are pieces on the board and time on the clock, your opponent can still blunder or stalemate you.",
      "Third comes running out of time. If your clock reaches zero, you lose even if you are far ahead on the board, unless your opponent has too little material to ever deliver checkmate (a lone king, for instance). That 'insufficient material' case is a draw. Fourth, and funniest, is abandonment: when a player simply stops playing, as happened at Hastings in 1895 when Curt von Bardeleben left the room in a lost position against Wilhelm Steinitz, the first official world champion.",
    ],
  },
  {
    id: 33,
    title: "Opening Principles: The Golden Moves",
    level: "0-800",
    puzzle: {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      instruction: "You're White after 1. e4 e5 2. Nf3 Nc6. Follow the opening principles: develop a bishop to an active square aimed at the centre/Black's kingside.",
      solutions: ["Bc4", "Bb5"],
      success: "Right: developing a bishop to c4 (Italian) or b5 (Spanish) follows the principle of piece development with purpose. Next on the list is castling.",
    },
    slides: [
      "This is not a memorise-the-theory course; it is about the ideas that make every good opening move make sense. There are 20 legal first moves for White and 20 replies for Black, so 400 positions after one move each, and after four moves each there are more than 84 billion possible positions. The overwhelming majority are nonsense that no experienced player would ever choose. Principles keep you out of that jungle.",
      {
        text: "The first principle is to control the centre: the four squares d4, e4, d5 and e5. A knight on a central square can reach eight squares while one in the corner reaches two, and a bishop in the middle of an open board sees up to thirteen. More mobility means more attacking options and more defensive flexibility. The simplest way to fight for the centre is to push your e- and d-pawns two squares.",
        diagram: {
          fen: "rnbqkbnr/pppppppp/8/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 1",
          caption: "Pawns on d4 and e4: the ideal centre. Everything the pieces do next is designed to support and use it.",
          highlights: ["d4", "e4"],
        },
      },
      {
        text: "The second principle is to develop your pieces, starting with the knights and bishops. Developing means moving them from the back rank to active squares. In a perfect world White would play knights to c3 and f3 and bishops to c4 and f4, each of them eyeing the centre. A knight on the rim, or a piece moved twice in the opening, wastes time.",
        diagram: {
          fen: "rn1qkbnr/pppb1ppp/8/3pp3/3PP3/2N2N2/PPP1BPPP/R1BQK2R w KQkq - 0 1",
          caption: "A typical well-developed setup: both knights out toward the centre and a bishop developed, with the king still to castle.",
          highlights: ["c3", "f3", "e2"],
        },
      },
      {
        text: "The third principle is to castle. Your king is safest tucked on the side of the board behind its pawns, and castling brings a rook toward the centre at the same time. After that, connect your rooks by clearing the back rank, then place them on central files. These ten 'golden moves' (e4, d4, Nc3, Nf3, Bc4, Bf4, O-O, Qd2, Rad1, Rfe1) describe the ideal arrangement. In real games the opponent obviously fights back, so you rarely get all ten.",
        diagram: {
          fen: "r3kb1r/pppqpppp/2n2n2/3p4/3PP3/2N1BN2/PPPQ1PPP/R3KB1R w KQkq - 0 1",
          caption: "Not a real game, just a picture of the plan: pawns in the centre, minor pieces developed, queen placed behind them. The king is still waiting to castle.",
          highlights: ["d4", "e4", "c3", "f3", "e3", "d2"],
        },
      },
      "A short do-and-don't list: DO take the centre, develop knights and bishops, and castle early. DON'T push pawns on the wings just for the sake of it, DON'T move the same piece several times in the opening (unless it wins material), and DON'T bring the queen out early, because it just becomes a target for tempo-gaining attacks. Pick one first move as White and stick with it so you get to know its structures deeply.",
    ],
  },
  {
    id: 34,
    title: "Opening as White with 1.e4",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
      instruction: "You're White after 1. e4 c5 2. Nf3 d6. Strike at the centre with your d-pawn (supported by the knight on f3).",
      solutions: ["d4"],
      success: "d4! The pawn is protected by your knight (and queen). If Black takes, you recapture with the knight and get a powerful central piece.",
    },
    slides: [
      "1. e4, the King's Pawn Opening, is the most common first move in chess. It claims a centre square, opens lines for the queen and bishop, and aims for a second central pawn on d4. The mirrored reply 1...e5 has been reached roughly 100 million times online, making it the most common position at all levels.",
      {
        text: "After 1...e5 White can't play d4 right away, because Black would capture the pawn. Instead White develops with 2. Nf3, attacking the e5 pawn. That is the typical pattern: the side to move first makes a threat and the second side has to respond. Black's most natural reply is 2...Nc6, defending the pawn while developing a piece.",
        diagram: {
          fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
          caption: "After 1. e4 e5 2. Nf3 Nc6: both sides have developed a knight and fight for the centre.",
        },
      },
      {
        text: "Now White chooses a bishop move. 3. Bc4 gives the Italian Game, named after Gioachino Greco, an Italian master of the 1600s; the bishop eyes the weak f7 square. It's a natural expression of the golden moves and has been popular for over four hundred years.",
        diagram: {
          fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
          caption: "The Italian Game: the bishop on c4 points at the f7 pawn.",
        },
      },
      {
        text: "The other major choice is 3. Bb5, the Ruy López or Spanish Opening. The bishop isn't in the centre, but it pressures the knight on c6, which in turn defends the e5 pawn. It's one of the most important openings at the top level: it was played several times in the 2021 World Championship match between Magnus Carlsen and Ian Nepomniachtchi.",
        diagram: {
          fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
          caption: "The Ruy López: the bishop attacks the defender of e5.",
        },
      },
      {
        text: "Black doesn't have to copy White. 1...c5 is the Sicilian Defense, one of Black's sharpest replies. It stops White from comfortably building the d4/e4 centre. The name goes back to an old Italian manuscript translated by Jacob Henry Sarratt in 1813 (il gioco Siciliano, 'the Sicilian game').",
        diagram: {
          fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
          caption: "After 1. e4 c5: Black fights for the d4 square from the side.",
        },
      },
      {
        text: "A common line runs 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6, the Najdorf Variation. White has a powerful knight on d4 controlling eight squares, and Black's a6 stops pieces coming to b5. It is named after the Polish-Argentine player Miguel Najdorf and is sometimes called the Rolls-Royce of Black's openings. It is more complex than a beginner needs, but it shows how logical every move is.",
        diagram: {
          fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
          caption: "The Najdorf Sicilian. The knight on d4 is active, and Black's a6 prevents the white pieces from landing on b5.",
        },
      },
    ],
  },
  {
    id: 35,
    title: "Opening as White with 1.d4",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6 0 2",
      instruction: "You're White after 1. d4 d5. Offer the Queen's Gambit by attacking d5 with a pawn.",
      solutions: ["c4"],
      success: "c4! The Queen's Gambit. If Black captures, you get the centre and fast development in return for a pawn you'll regain.",
    },
    slides: [
      "1. d4 is the second most popular first move. In the online databases e4 is about twice as common, but between them, e4 and d4 begin around 80 percent of all games. Both aim for the centre and use the same principles, but the middlegames are quite different. A sound piece of advice: do not mix them. Pick one and play it often enough to learn all its quirks.",
      {
        text: "The usual reply is 1...d5, which mirrors White and blocks the second central pawn. The pawn structure resembles the e4/e5 situation, but because the d-pawn is defended by the queen, the early play feels calmer than in many e4 openings.",
        diagram: {
          fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6 0 2",
          caption: "After 1. d4 d5: both sides have a pawn in the centre.",
        },
      },
      {
        text: "One of the easiest openings to learn as White is the London System. After 1. d4 d5, White develops the bishop with 2. Bf4, outside the pawn chain and before playing e3, which would otherwise lock it in. White follows with moves like e3, Nf3, Nbd2, c3 and Bd3, building a sturdy setup that can be used against many different Black moves.",
        diagram: {
          fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
          caption: "The London System starts with the dark-squared bishop on f4.",
        },
      },
      {
        text: "This is how the London setup tends to look once both sides have developed: a compact pyramid of pawns on c3, d4 and e3, knights on f3 and d2, and bishops on f4 and d3, with castling still to come.",
        diagram: {
          fen: "rn1q1rk1/pp2bppp/2p1pn2/3p1b2/3P1B2/2PBPN2/PP1N1PPP/R2QK2R w KQ - 0 1",
          caption: "A typical London position. Don't memorise it; just notice how every piece has a sensible job.",
        },
      },
      {
        text: "The other great d4 system is the Queen's Gambit: 1. d4 d5 2. c4. It's called a gambit because White seems to offer a pawn. If Black accepts with 2...dxc4 White plays e3 (or e4) and regains the pawn while holding a big centre and quick development. Typically in d4 openings, your d-pawn works best with your c-pawn, not with your e-pawn.",
        diagram: {
          fen: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2",
          caption: "The Queen's Gambit: 2. c4 attacks Black's central d5 pawn.",
        },
      },
      {
        text: "Black can also decline the gambit (the Queen's Gambit Declined), usually with 2...e6, defending the d5 pawn. From here a whole other family of positions begins. The Netflix series The Queen's Gambit made this opening famous overnight.",
        diagram: {
          fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
          caption: "The Queen's Gambit Declined: Black keeps a solid pawn in the centre.",
        },
      },
    ],
  },
  {
    id: 36,
    title: "Scholar's Mate: Using It and Defending Against It",
    level: "0-800",
    puzzle: {
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
      instruction: "You're White: 1. e4 e5 2. Qh5 Nc6 3. Bc4 Nf6. Finish the game.",
      solutions: ["Qxf7#"],
      success: "Qxf7#! Scholar's Mate in four moves. Please don't forget to play the last move: thousands of players have!",
    },
    slides: [
      "The four-move checkmate known as the Scholar's Mate has been reached nearly a million times online, and it works because so many players don't see it coming. We study it here, but not as a recommended way to play. If your opponent is prepared, you end up with an early queen out, wasted tempo and a bad position. Learn it mostly so that you never fall for it as Black.",
      {
        text: "The idea begins with 1. e4 e5 2. Qh5. The queen attacks the e5 pawn and eyes the f7 pawn, which at the start is defended only by the king. It is the weakest point in Black's position at the opening.",
        diagram: {
          fen: "rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2",
          caption: "The queen on h5 attacks e5 and aims at f7.",
        },
      },
      {
        text: "The first trap: if Black plays the natural-looking 2...g6, threatening the queen, White simply plays 3. Qxe5+. The queen forks the king and the rook on h8, so after Black deals with the check, White wins the rook as well.",
        diagram: {
          fen: "rnbqkbnr/pppp1p1p/6p1/4Q3/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 0 3",
          caption: "After 3. Qxe5+ the queen attacks both king and rook, winning at least a whole rook.",
        },
      },
      {
        text: "If Black defends the pawn with 2...Nc6, White continues 3. Bc4, so queen and bishop both attack f7. If Black now carelessly plays 3...Nf6, White can play 4. Qxf7#. The knight on f6 blocks nothing: Black's king can't capture the queen because the bishop protects her.",
        diagram: {
          fen: "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
          caption: "White to move and mate: queen takes f7. About 30 percent of players online still missed it at this point!",
        },
      },
      {
        text: "Here's the final position. Notice that the queen is protected by the bishop on c4, and the king has no flight squares.",
        diagram: {
          fen: "r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4",
          caption: "Scholar's Mate: Black's king is attacked by a protected queen and can't move to d8 or e7 or capture.",
        },
      },
      "How do you defend as Black? Don't ignore the queen. After 1. e4 e5 2. Qh5 Nc6 3. Bc4, the f7 pawn is attacked twice, so either defend it or counterattack with tempo. The simple 3...g6 attacks the queen, and after 4. Qf3 Black can calmly develop with ...Nf6; 3...Qe7 also defends f7 directly. The habit to build: whenever an enemy queen and bishop both aim at f7 (or f2 if you are White), count attackers and defenders before you make any developing move.",
      "For the attacker, the lesson is the reverse: if your opponent defends accurately, you'll have moved your queen several times and developed less than they have. Strong players only use this trick as a surprise against beginners, which is why long-term growth comes from following the opening principles instead.",
    ],
  },
  {
    id: 37,
    title: "Starting with Black: Traditional Openings",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
      instruction: "You're Black after 1. e4 e5 2. Nf3. Defend your attacked pawn with a move that also develops a piece.",
      solutions: ["Nc6"],
      success: "Nc6! It defends e5 and develops a knight toward the centre. The traditional answer to White's early threats.",
    },
    slides: [
      "When you play Black, you respond rather than lead. Almost everything from the White opening courses still applies: take space in the centre, develop knights and bishops, castle, connect the rooks. The difference is that you are always a move behind, so you must look at what White just threatened.",
      {
        text: "Take 1. e4 e5. You mirror White's central pawn so that 2. d4 can be answered with ...exd4 and White can't set up two pawns in the centre. If White plays 2. Nf3 to attack e5, you defend and develop in one move with 2...Nc6.",
        diagram: {
          fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
          caption: "Black defends e5 with a developing move: Nc6.",
        },
      },
      {
        text: "Say White then plays 3. d4. Black can capture with 3...exd4 and after 4. Nxd4 the pressure is relieved: White no longer has the double pawn centre, and Black can finish development. This position is called the Scotch Game, and it has been played millions of times.",
        diagram: {
          fen: "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
          caption: "The Scotch Game. White has traded a central pawn and has an active knight, but Black has equal chances.",
        },
      },
      "If both sides always make the most natural developing move, they can reach a perfectly symmetrical position. It's fine for beginners, but it's not ideal long term: if Black just copies White, White gets to checkmate one move earlier. As you improve, you'll want openings that create imbalance and give you chances to outplay unprepared opponents.",
      {
        text: "Black's logic is the same against 1. d4. Play 1...d5, putting a pawn in the centre, and if White offers the Queen's Gambit with 2. c4, decline with 2...e6. Many club players accept with 2...dxc4, and that's actually the most popular reply at intermediate level, but White's results jump to 56 percent against it because Black gives up control of the centre and the position is hard to play.",
        diagram: {
          fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
          caption: "The Queen's Gambit Declined, the traditional reply: the d5 pawn is protected by the pawn on e6.",
        },
      },
    ],
  },
  {
    id: 38,
    title: "Starting with Black: Setup-Based Openings",
    level: "0-800",
    puzzle: {
      fen: "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2",
      instruction: "You're Black in the King's Indian setup (1. d4 Nf6 2. c4). Play the next setup move: pawn to g6, preparing the fianchetto bishop.",
      solutions: ["g6"],
      success: "g6! Now ...Bg7, ...d6 and ...O-O complete the King's Indian setup, which you can aim for against almost anything.",
    },
    slides: [
      "One difficulty of playing Black is that White can start in many different ways. Experienced players can remember the best answer to each, but beginners cannot. A setup-based opening avoids the problem: you play almost the same moves whatever White does. You get familiar positions and learn the typical plans really well.",
      {
        text: "The King's Indian (or Pirc) setup is the classic example. Black plays ...Nf6, ...g6, ...Bg7, ...d6 and castles short. Which name it has depends on White's first move (against 1. d4 it is the King's Indian; against 1. e4 it is the Pirc), but the Black formation is the same.",
        diagram: {
          fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 0 1",
          caption: "The King's Indian setup (Black pieces on f6, g6, g7, d6 and castled). White has built a big centre, which Black will later try to attack.",
        },
      },
      {
        text: "The Dutch Defense is another setup: Black plays ...f5 against almost everything White does, except against 1. e4 because White could just capture the pawn. Black develops, fights for the e4 square, and castles.",
        diagram: {
          fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq f6 0 2",
          caption: "The Dutch Defense after 1. d4 f5: Black controls the important e4 square.",
        },
      },
      "The advantages are clear: you study fewer lines, you'll reach similar middlegames over and over, and you can play the system against nearly anything. The disadvantages are just as clear. Games can become repetitive, you'll learn less about other kinds of positions, and a setup player can become lazy and miss an early threat because they are playing the same moves on autopilot.",
      "Setups are often a bit more passive than classical openings, but they are still principled: they fight for the centre, just from a distance and often by challenging White's pawns later instead of occupying squares immediately. They're a good solution if you want a predictable, low-study repertoire as Black.",
    ],
  },
  {
    id: 39,
    title: "Starting with Black: Building-Block Openings",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq d3 0 2",
      instruction: "You're Black after 1. e4 c6 2. d4. Complete the Caro-Kann setup by playing a pawn to the centre that's supported by the c6 pawn.",
      solutions: ["d5"],
      success: "d5! The pawn is supported by c6, so you can recapture if White takes. Your centre is solid and your pieces will develop easily.",
    },
    slides: [
      "A building-block opening puts a pawn in the centre, but first supports it with a second pawn. The two best-known examples against 1. e4 are the Caro-Kann Defense (the c-pawn is the block) and the French Defense (the e-pawn is the block). Against 1. d4 the Queen's Gambit Declined works the same way.",
      {
        text: "In the Caro-Kann Black plays 1...c6, planning 2...d5 next. When White plays 2. d4, Black replies 2...d5: the pawn on d5 is supported by the c6 pawn, so if White takes on d5, Black simply recaptures.",
        diagram: {
          fen: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3",
          caption: "The Caro-Kann: the c6 pawn supports the central d5 pawn.",
        },
      },
      {
        text: "In the French Defense Black starts with 1...e6 and follows with ...d5 after White's 2. d4. This time the e6 pawn supports the d5 pawn. The structure is a bit tighter than the Caro-Kann: the light-squared bishop can get shut in, which is its main strategic challenge.",
        diagram: {
          fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3",
          caption: "The French Defense: the e6 pawn supports d5.",
        },
      },
      {
        text: "The Queen's Gambit Declined is the same idea against 1. d4: Black plays 1...d5 and, after 2. c4, supports the pawn with 2...e6 instead of taking the gambit pawn. If Black does accept, then White's e3 (or e4) rebuilds the centre and Black has given up control of it for a temporary extra pawn.",
        diagram: {
          fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
          caption: "QGD: solid, with a pawn chain on d5 and e6.",
        },
      },
      {
        text: "Why decline? Imagine what White wants: two pawns in the centre. If Black captures on c4 and White replies e4, White does get exactly that, while Black has given up control of the centre. That's why principled play says: decline.",
        diagram: {
          fen: "rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR b KQkq e3 0 3",
          caption: "After 2...dxc4 3. e4 White has a huge centre for the temporarily lost pawn.",
        },
      },
      "Statistics at the lower rating levels (1600 and below) back this up. After 1. e4 e5, White scores about 51 percent; the Caro-Kann with 1...c6 cuts that to about 47 percent. Copying White hands White the first strike, while a building-block defence makes the opponent react. The drawback: each of these openings requires White to play a specific first move (French and Caro-Kann only work against 1. e4; the QGD only against 1. d4), so you'll need a second reply for the other first move.",
    ],
  },
  {
    id: 40,
    title: "Ladder Mate: Two Heavy Pieces Against a Lone King",
    level: "0-800",
    puzzle: {
      fen: "7k/Q7/8/8/8/8/8/1R4K1 w - - 0 1",
      instruction: "You're White. Your queen cuts off the 7th rank. Finish with a Ladder Mate.",
      solutions: ["Rb8"],
      success: "Rb8#! The queen takes away the 7th rank and the rook checks on the 8th: the ladder is complete.",
    },
    slides: [
      "Ladder Mate is the easiest checkmate to learn, and it's a good place to start the endgame. It needs two pieces that attack along ranks and files, such as two queens, queen plus rook, or two rooks. They take turns giving check, each one forcing the king one rank (or file) closer to the edge, like climbing the rungs of a ladder, until the king is out of room.",
      {
        text: "Here is the final picture. The queen on g8 gives check along the back rank, while the second queen on f7 covers the entire 7th rank, so the king on b8 has no way out. The mate works anywhere along an edge: it only matters that the king is on the outermost rank or file.",
        diagram: {
          fen: "1k4Q1/5Q2/8/8/8/8/7K/8 b - - 0 1",
          caption: "Ladder Mate: one queen checks, the other cuts off the next rank.",
        },
      },
      {
        text: "To get there, push the king toward the nearest edge. Say we want the king on the 1st rank. The queen on e6 already forbids everything on the 6th rank and above, so the other queen steps to f5 with check. The king must step down to the 4th rank.",
        diagram: {
          fen: "8/5Q2/4Q3/2k5/8/8/7K/8 w - - 0 1",
          caption: "White to move. Play the 'far' queen, Qf5+, which checks and keeps the king below the 6th rank.",
          highlights: ["f5", "e6"],
        },
      },
      "After each check, the queen that did NOT just move is the one that moves next. The two pieces alternate, each time cutting off a rank behind the king. In a few moves the king runs out of board and the last check is mate. As a rule of thumb, always move the piece that's farthest from the king, since the nearer piece is already building the wall.",
      {
        text: "Rooks need a little extra care. Unlike queens, two rooks do not protect each other diagonally. If you bring a rook next to the king, the king may simply capture it. Here the rook on e4 is already close, so giving check with Rf3+ lets the king take the rook on e4.",
        diagram: {
          fen: "8/8/8/5R2/4R3/3k4/8/7K w - - 0 1",
          caption: "If White plays Rf3+ the black king captures the e4 rook. Keep rooks far from the king, on the other side of the board if need be.",
          highlights: ["e4", "f3"],
        },
      },
      {
        text: "The safe way to ladder with rooks: keep both rooks at a distance, on opposite sides of the board. One rook cuts off a rank from afar (a6), the other checks from a long way off (h5). When a rook is in danger, it's often worth spending a move to swing it to the opposite side of the board; time is not an issue as long as you aren't running into the 50-move rule.",
        diagram: {
          fen: "8/8/R7/4k3/8/8/8/1K5R w - - 0 1",
          caption: "Rooks on a6 and h1 are safe from the king. Rh5+ forces the king down; Ra5+ will do the same after that.",
          highlights: ["a6", "h1", "h5"],
        },
      },
    ],
  },
  {
    id: 41,
    title: "King and Queen Checkmate",
    level: "0-800",
    puzzle: {
      fen: "7k/8/5K2/6Q1/8/8/8/8 w - - 0 1",
      instruction: "You're White. The black king shuffles between h8 and h7 and your king is already on f6. Deliver the mate.",
      solutions: ["Qg7"],
      success: "Qg7#! Protected by the king, the queen delivers the one check of the whole technique.",
    },
    slides: [
      "If you win a queen (or promote a pawn), the king-and-queen mate is a technique you must know, because without it you can chase the enemy king around until the clock or the 50-move rule saves your opponent. It is not hard. The key rules are: do not give any checks until the very end; keep the queen a knight's move away from the enemy king; and make sure the king always has at least two squares to shuffle between.",
      {
        text: "Start position: the black king is on e5 in the open and White has just a queen and king. Randomly checking would only chase it around the board.",
        diagram: {
          fen: "8/8/8/4k3/8/8/8/3QK3 w - - 0 1",
          caption: "King and queen against the king. White has a won game, but only if the technique is known.",
        },
      },
      {
        text: "Technique one: knight opposition. Place the queen on a square where it would give check if it were a knight. The queen then boxes the king in. The king can't cross the rank or file that the queen occupies, and the queen is too far away for the king to attack.",
        diagram: {
          fen: "8/8/8/4k3/8/3Q4/8/4K3 b - - 0 1",
          caption: "Qd3 is a knight's move from e5. The king is cut off from the d-file and the 3rd rank.",
          highlights: ["d3", "e5"],
        },
      },
      "Technique two: copy the king. If the king moves one square, you move the queen one square in the same direction, so that you stay in knight opposition. Each time, the box around the enemy king gets smaller until the king is forced into the corner or against the edge.",
      {
        text: "Warning! When the king is in the corner, don't put the queen exactly a knight's move away from it. Here Qg6 leaves the black king on h8 with no safe squares and no check, which is stalemate: a draw instead of a win.",
        diagram: {
          fen: "7k/8/6Q1/8/8/8/8/K7 b - - 0 1",
          caption: "Stalemate! Black is not in check but has no legal move. Never take away the final square unless it's checkmate.",
        },
      },
      {
        text: "Instead, leave the king two squares to shuffle between (here h7 and h8) and bring up your own king. The queen on g5 stays put while the white king walks over.",
        diagram: {
          fen: "7k/8/8/6Q1/8/8/8/4K3 w - - 0 1",
          caption: "Black can only shuffle h8–h7. White uses these tempo moves to walk the king up the board.",
          highlights: ["h7", "h8", "g5"],
        },
      },
      {
        text: "When the white king reaches f6, the queen finally moves in for the one and only check of the whole procedure. The queen is protected by the king, and the black king is trapped in the corner.",
        diagram: {
          fen: "7k/6Q1/5K2/8/8/8/8/8 b - - 0 1",
          caption: "Mate. From the worst starting positions this takes at most about ten moves, so there's never a reason to rush.",
        },
      },
    ],
  },
  {
    id: 42,
    title: "King and Rook Checkmate",
    level: "0-800",
    puzzle: {
      fen: "4k3/8/4K3/8/8/8/8/R7 w - - 0 1",
      instruction: "You're White. The black king is on the edge and your king stands opposite. Deliver checkmate with the rook.",
      solutions: ["Ra8"],
      success: "Ra8#! The rook gives the check and your king covers d7, e7 and f7. That's the finishing blow of the king-and-rook mate.",
    },
    slides: [
      "A king and rook can also force checkmate against a lone king, but the technique is different because a rook can't trap a king by itself. Your own king has to take an active part. The goal is the same: drive the enemy king to an edge, then deliver check with the rook while your king covers the escape squares.",
      {
        text: "This is how the finished mate looks. The black king is on the edge, the white king stands opposite it with one square between them, and the rook gives check along the back rank. The king takes away d7, e7 and f7, and the rook takes away the rest of the 8th rank.",
        diagram: {
          fen: "R3k3/8/4K3/8/8/8/8/8 b - - 0 1",
          caption: "King and rook mate on the edge of the board.",
        },
      },
      {
        text: "Step 1: place the rook so it cuts off the enemy king along a file. Then bring your king into knight opposition, a knight's move away from the enemy king. In the diagram, the rook stops the black king from crossing the e-file and Kd4 stands a knight's move from f3.",
        diagram: {
          fen: "4R3/8/8/8/3K4/5k2/8/8 b - - 0 1",
          caption: "Knight opposition with a rook cutting off the e-file.",
        },
      },
      {
        text: "Step 2: aim for direct opposition: the kings face each other with exactly one square in between, and it must be your opponent who had to step into it. Then you play the rook check and the enemy king is forced one file closer to the edge.",
        diagram: {
          fen: "4R3/8/8/8/3K1k2/8/8/8 w - - 0 1",
          caption: "Direct opposition with White to move. Rf8+ pushes the black king onto the g-file.",
          highlights: ["d4", "f4", "e4"],
        },
      },
      "If you are the one who would have to step into direct opposition (by moving your own king), don't! Wait with a rook move along the same rank or file instead. This 'waiting move' forces your opponent to move into the opposition, and then you play your check. A waiting move costs you nothing and is a key idea in endgame technique.",
      "If the enemy king attacks your rook, don't panic. Slide the rook all the way to the other end of the file so that it's out of reach, then continue looking for knight opposition. The whole procedure is forced: if you follow it, the enemy king cannot escape, though it takes more moves than the queen mate. Remember the main rule for both mates: you must know the technique, because simply being a rook or queen up does not win the game.",
      "One final reminder: king and queen versus king and king and rook versus king are wins, and so is king and pawn versus king in the right circumstances (later courses). A single bishop or a single knight, however, cannot checkmate a lone king, and neither can two knights, because they don't cover enough squares between them.",
    ],
  },
  {
    id: 43,
    title: "Solo Acts: One-Piece Checkmates",
    level: "0-800",
    puzzle: {
      fen: "6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1",
      instruction: "You're White. Black's king is smothered by its own rook and pawns. Find the knight move that mates.",
      solutions: ["Nf7"],
      success: "Nf7#! A smothered mate: the knight checks, and the rook and pawns that surround the king leave it with no air at all.",
    },
    slides: [
      "Checkmates in the middlegame happen far more often than the endgame techniques we just studied. A 'solo act' is a checkmate delivered by a single piece, with no help needed from any other attacker. Solo acts usually depend on the defender's own pieces blocking the king's escape squares.",
      {
        text: "The Back-Rank Mate is the classic. A castled king stays on the back rank behind its own pawns, and a rook or queen arrives with check along that rank. There's no square to run to and nothing can block. Here the rook on e8 mates.",
        diagram: {
          fen: "4R1k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1",
          caption: "A rook or queen on the back rank: Black's own pawns trap the king.",
        },
      },
      "Use it as a weapon and as a warning. To avoid it yourself, give your king a 'luft', an escape square, by moving one of the pawns in front of the castled king (usually h3 or h6, or a3 and a6). It takes a single move and has saved countless games.",
      {
        text: "There's a special case with the queen. Even when the king seems to have an escape square, the queen's diagonal power can take it away. Here the black king on h8 'could' run to g7, but the queen on f8 covers g7 and g8, so it's mate.",
        diagram: {
          fen: "5Q1k/7p/8/8/8/8/2K5/8 b - - 0 1",
          caption: "A queen mates where a rook wouldn't: she controls the diagonal as well as the rank.",
        },
      },
      {
        text: "The Fool's Mate is a diagonal solo act: the black queen delivers mate on her own from h4, because the king's own pieces and pawns take away its flight squares. Diagonal solo acts need a king that is completely crowded by its own pieces.",
        diagram: {
          fen: "rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3",
          caption: "A queen can deliver mate on a diagonal if the king is suffocated by its own pieces.",
        },
      },
      {
        text: "The funniest solo act is the Smothered Mate. A knight gives check, and the king can't move because its own pieces fill every neighbouring square. The knight cannot be captured because the only piece that could take it is smothered too.",
        diagram: {
          fen: "6rk/5Npp/8/8/8/8/8/6K1 b - - 0 1",
          caption: "Smothered mate: the king is surrounded by its own rook and pawns, and the knight on f7 gives the final blow.",
        },
      },
      "In almost every solo act, the defender has neglected the king, whether by leaving it on the back rank, by leaving it with no flight square, or by piling pieces next to it. The lesson for your own play is the same one in reverse: make air for your king and don't smother it with your own pieces.",
    ],
  },
  {
    id: 44,
    title: "Two-Piece Checkmates and Batteries",
    level: "0-800",
    puzzle: {
      fen: "r4rk1/5pp1/7p/8/8/2Q5/1B3PPP/6K1 w - - 0 1",
      instruction: "You're White. Your queen and bishop form a battery on the long diagonal. Find the checkmate.",
      solutions: ["Qxg7"],
      success: "Qxg7#! The queen is protected by the bishop behind her, so the king can't capture, and every flight square is covered.",
    },
    slides: [
      "Most checkmates in real games need two pieces working together: one gives check and the other protects the checking piece or takes away escape squares. The queen is the most common partner, delivering mate while protected by a bishop, a knight or a rook.",
      {
        text: "A battery is when two pieces line up on the same diagonal, rank or file, with the front piece attacking and the back piece supporting it. Here the white queen on c3 and bishop on b2 point at the g7 pawn. Qxg7 is checkmate: the king can't take the queen because the bishop protects it, and all escape squares are covered.",
        diagram: {
          fen: "r4rk1/5pQ1/7p/8/8/8/1B3PPP/6K1 b - - 0 1",
          caption: "After Qxg7#: the queen is protected by the bishop behind her.",
        },
      },
      "The pieces don't have to be in a battery. They only need to attack the same square from different directions. The Scholar's Mate is a good example: the queen and bishop come from different angles to f7 and the bishop protects the queen so the king can't recapture.",
      {
        text: "A queen and a knight work equally well. If the knight attacks g7, then the queen can capture there and be protected by the knight. Compare: the knight on f5 here covers g7, so Qxg7 is mate, with the knight providing the protection.",
        diagram: {
          fen: "6k1/5pQ1/7p/5N2/8/8/5PPP/6K1 b - - 0 1",
          caption: "Queen and knight combine: the knight on f5 protects the queen on g7.",
        },
      },
      {
        text: "Other pairs also work. A rook can combine with a bishop: the bishop protects the rook, which gives the mate on the back rank, and between them they cover every flight square. Here's a rook-and-bishop back-rank mate.",
        diagram: {
          fen: "4R1k1/5pp1/8/8/8/3B4/5PPP/6K1 b - - 0 1",
          caption: "The rook on e8 gives check; the bishop on d3 covers the h7 escape square, so the king is trapped.",
        },
      },
      {
        text: "Watch out: batteries cut both ways. Black's queen and rook on the h-file are aiming at the h2 pawn, and if it were Black's move, Qxh2 would be mate. Always scan both sides for batteries pointed at your own king.",
        diagram: {
          fen: "7r/6k1/8/8/7q/8/5PPP/5RK1 b - - 0 1",
          caption: "With Black to move, Qxh2 would be checkmate: the rook behind the queen protects her. Count your opponent's batteries as carefully as your own.",
          highlights: ["h4", "h8", "h2"],
        },
      },
    ],
  },
  {
    id: 45,
    title: "Forcing Checkmates: Removing the Defender and Mate in Two",
    level: "0-800",
    puzzle: {
      fen: "8/5p1k/6p1/8/8/2B5/5Q2/6K1 w - - 0 1",
      instruction: "You're White and have mate in two. Start with the forcing check.",
      solutions: ["Qh4+"],
      success: "Qh4+! Black's only reply is Kg8, and then Qh8# is mate, protected by the bishop on c3.",
    },
    slides: [
      "Not every checkmate is simply there on the board. Often an enemy piece guards the key square, and you must first get rid of it. This idea is called removing the defender: capture or attack the piece that stops your mate or your material win. It is among the most important tactical ideas in chess, and you can use it even at the beginner level.",
      {
        text: "In this position the queen and bishop aim at g7, but Qxg7 fails because the knight on f5 captures the queen. The knight is the defender, so remove it: Rxf5!",
        diagram: {
          fen: "r5k1/5pp1/4p2p/5n2/8/2Q5/1B4PP/5RK1 w - - 0 1",
          caption: "White's rook can capture the defending knight on f5. If Black recaptures with the e6 pawn, the g7 square is no longer guarded.",
          highlights: ["f5", "g7"],
        },
      },
      {
        text: "After 1. Rxf5 exf5 2. Qxg7# the mate works: the queen is protected by the bishop, and nothing can capture it. White gave up a rook (5 points) for a knight (3 points), which is normally a bad trade, but here it wins the game. The stronger you get, the more you'll understand when material should be given up for a decisive attack.",
        diagram: {
          fen: "r5k1/5pQ1/7p/5p2/8/8/1B4PP/6K1 b - - 0 2",
          caption: "The final position: a sacrificed rook, but the king is mated.",
        },
      },
      "Forced checkmates are 'solved' positions: if you play the right moves, mate cannot be avoided whatever the opponent does. The easiest ones are mates in one. To learn mates in two or three, imagine you could play two moves in a row, then work out how to get those moves onto the board using forcing moves: checks, or attacks on valuable pieces. Forcing moves limit the opponent's choices, and that's what makes your analysis simple.",
      {
        text: "Mate in two: if the queen could stand on h8, it'd be mate, since the bishop on c3 would protect it. How can White get there with check so Black has no choice? 1. Qh4+ forces 1...Kg8 (the only legal move), and 2. Qh8# finishes.",
        diagram: {
          fen: "8/5p1k/6p1/8/8/2B5/5Q2/6K1 w - - 0 1",
          caption: "White plays Qh4+, Black must go to g8, and then the queen slides to h8 protected by the bishop.",
          highlights: ["h4", "h8", "c3"],
        },
      },
      {
        text: "The mating position: the bishop 'laser' down the long diagonal protects the queen on h8, and the king has no squares.",
        diagram: {
          fen: "6kQ/5p2/6p1/8/8/2B5/8/6K1 b - - 3 2",
          caption: "Mate in two, delivered by queen and bishop.",
        },
      },
    ],
  },
  {
    id: 46,
    title: "Draws I: Agreement, Repetition and the 50-Move Rule",
    level: "0-800",
    puzzle: {
      fen: "7k/5Q2/7p/8/8/8/rr6/6K1 w - - 0 1",
      instruction: "You're White and two rooks down. Save the game: start the perpetual check.",
      solutions: ["Qf8+"],
      success: "Qf8+! After ...Kh7 Qf7+ Kh8 Qf8+ the same position comes up again and again, and the game is drawn by threefold repetition, despite the huge material deficit.",
    },
    slides: [
      "This book is called How to Win at Chess, but you also need to know how games are drawn. A draw can be the best result from a bad position, and you must also avoid letting a winning game slip away. Even with perfect play, chess is a draw: two top engines will often draw an entire match. Humans, luckily, are far from perfect. In the Lichess database, 43 percent of master games end in draws, but for ordinary players around 1600 only 4 percent do. Most amateur games are played to a decisive result.",
      "Draw by agreement: one player offers, the other accepts. It's reasonable when the position is equal and neither side can make progress without taking big risks. Grandmasters accept draw offers in positions like that all the time, which has become controversial: sponsors and fans complain about games that end after a few moves. A 2005 tournament in Sofia even banned draw offers to encourage fighting chess. At the beginner and intermediate level, you don't need such rules.",
      {
        text: "Draw by threefold repetition: if the same position occurs three times (not necessarily in a row), either player can claim a draw. It exists so a game cannot go on forever. It also gives you a defensive resource: you can be far behind in material but force a draw if you have a perpetual check, a never-ending series of checks. Look at the diagram: White's queen can check the king again and again, and Black has only one legal reply each time.",
        diagram: {
          fen: "7k/5Q2/7p/8/8/8/rr6/6K1 w - - 0 1",
          caption: "White is two whole rooks down, yet it is a draw: Qf8+ Kh7 Qf7+ Kh8 Qf8+ and so on. Black's king has exactly one legal move each time.",
          highlights: ["f8", "f7", "h8", "h7"],
        },
      },
      "The reverse side matters just as much: if you are winning, always check whether your opponent has a perpetual check or a repetition trick, and make your plan so that their king-hunting runs out of checks first. The simplest cure is to keep your king tucked away safely behind pawns and pieces.",
      "The 50-move rule: if each player makes 50 moves without a capture or a pawn move, the game is drawn. It prevents endless shuffling in positions where nobody can make progress, for example rook versus rook, since with long time controls (extra seconds per move) a game could otherwise go on indefinitely. It also gives a clock to winning technique: if you are trying to win a theoretical draw (say, rook versus knight), you have 50 moves to do it. And if you are using a long mating technique, learn it, because it must finish before the 50 moves run out.",
      "Practical advice. Never resign out of habit. Play on while there's a chance of a drawing resource, and when you are ahead make sure you aren't walking into a draw by repetition or the 50-move rule. A draw you could have avoided, or a draw you could have grabbed, is a lesson in itself.",
    ],
  },
  {
    id: 47,
    title: "Draws II: Stalemate and Insufficient Material",
    level: "0-800",
    puzzle: {
      fen: "7k/8/5K2/6Q1/8/8/8/8 w - - 0 1",
      instruction: "You're White with a queen and king against a king in the corner. Careful: some queen moves are stalemate! Play the move that checkmates.",
      solutions: ["Qg7"],
      success: "Qg7#! Compare it with the stalemate we saw earlier: the difference is the check. Always check that your move is mate or that the enemy king keeps a legal move.",
    },
    slides: [
      "Stalemate means the player to move has no legal move but is not in check. The game is a draw, and it is the most heartbreaking way to lose half a point, because it usually happens when you're winning. It happens when you are far ahead and a bit careless: you're so busy making the enemy king smaller that you take away its last square without giving check.",
      {
        text: "The classic is queen and king against king in the corner. With Black to move, the king on h8 has no safe squares (g8, g7, h7 are all attacked) and isn't in check, so it's stalemate even though White is a whole queen up.",
        diagram: {
          fen: "7k/5Q2/6K1/8/8/8/8/8 b - - 0 1",
          caption: "Stalemate: no legal move and not in check, so the game is drawn.",
        },
      },
      {
        text: "It doesn't just happen in the corner. Here White is up two pieces but if it's Black's turn, the king on a8 has no move and it's stalemate. The cure is to use the correct mating technique (such as Ladder Mate with two queens) and to check before every move whether your opponent still has a legal move.",
        diagram: {
          fen: "k7/2Q5/1K6/8/8/8/8/8 b - - 0 1",
          caption: "Another stalemate: the queen takes away a7, b7 and b8 and the king covers the rest.",
        },
      },
      "Stalemate is also a rescue resource. If you're totally lost, look for ways to reduce your own pieces' mobility to zero and hope your opponent doesn't notice. At master level it's extremely rare, but at lower levels it saves a surprising number of games. A good rule when you're ahead: before capturing or moving, make sure the opponent has at least one legal move, or that your move is check.",
      {
        text: "Insufficient checkmating material: if neither side can possibly checkmate, the game is drawn immediately. A lone king against king and a single knight (or bishop) cannot be mated, even with cooperation, so the game ends on the spot. The same goes for king and two knights against a lone king in practice. A pawn is different: it can promote, so king and pawn is not insufficient material.",
        diagram: {
          fen: "8/8/4k3/8/3n4/8/8/K7 w - - 0 1",
          caption: "King and knight against king: a dead draw, however many seconds are left on the clock.",
        },
      },
      "This rule also matters on the clock. If your opponent runs out of time but you have only a lone king (or no mating material), the game is a draw, not a win for the player who ran out of time. If you had any other piece such as a pawn, you'd win on time. So keep your last pawn if time is short, and if you are the one in trouble, remember that trading down to bare kings can save the game.",
      "Summary: a game is drawn by agreement, threefold repetition, stalemate, the 50-move rule or insufficient material. Know them all both as a safety net and as a trap to avoid. Draws are not failures: a draw from a lost position is a real victory of resilience, and you can always practice the winning techniques to avoid throwing away your own wins.",
    ],
  },
  {
    id: 48,
    title: "Piece Vision: What Each Piece Sees",
    level: "0-800",
    puzzle: {
      fen: "7k/p7/1b3p2/8/3Q4/8/8/7K w - - 0 1",
      instruction: "You're White. Your queen is attacked by the bishop on b6. Move her by capturing the one undefended piece she sees.",
      solutions: ["Qxf6+"],
      success: "Qxf6+! The queen escapes the bishop and wins a pawn with check. Capturing the defended bishop (Qxb6) would have lost the queen for two pieces.",
    },
    slides: [
      {
        text: "Every piece 'sees' the squares it could move to or capture on: empty squares, enemy pieces and its own pieces. On an empty board a queen on a central square sees 27 squares, almost half the board. A rook sees 14 from anywhere, and a bishop sees 13 from the middle; their total (27) equals one queen's range.",
        diagram: {
          fen: "k7/8/8/8/3Q4/8/8/7K w - - 0 1",
          caption: "A queen on d4 sees 27 squares: more than any other piece.",
          highlights: ["a1", "a4", "a7", "b2", "b4", "b6", "c3", "c4", "c5", "d1", "d2", "d3", "d5", "d6", "d7", "d8", "e3", "e4", "e5", "f2", "f4", "f6", "g1", "g4", "g7", "h4", "h8"],
        },
      },
      {
        text: "A knight in the middle of the board sees eight squares, earning the nickname Octopus Knight. In the corner it sees only two. This is the mobility argument behind 'put your pieces in the centre'.",
        diagram: {
          fen: "k7/8/8/8/3N4/8/8/7K w - - 0 1",
          caption: "The Octopus Knight: eight squares of vision on d4.",
          highlights: ["b3", "b5", "c2", "c6", "e2", "e6", "f3", "f5"],
        },
      },
      {
        text: "In real games pieces also see their own pieces and are blocked by them. Here the white queen on d4 sees the b6 bishop and the f6 pawn. It does not see the rook-side of the board behind them: blocked pieces cannot see through other pieces. The queen's own pawns and king take squares from her too, so she may see more squares than she can actually move to.",
        diagram: {
          fen: "7k/p7/1b3p2/8/3Q4/8/8/7K w - - 0 1",
          caption: "The queen sees both the bishop and the f6 pawn. But is she really attacking them?",
          highlights: ["b6", "f6"],
        },
      },
      "Seeing is not attacking. You attack a piece when you really threaten to win material by capturing it. The f6 pawn is undefended, so the queen attacks it. The bishop on b6 is defended by the a7 pawn, so capturing it would lose the queen for a bishop and a pawn: the queen sees it but doesn't attack it. A piece that is attacked by a cheaper piece (like a bishop attacking a queen) is in danger even if it is defended, because trading a queen for a bishop is a bad deal.",
      "A good way to use this: before every move, scan the board from each piece's point of view. Which squares and pieces does it see? What new lines would open if a piece moved? Strong players do this automatically; it's what lets them spot threats and tactics. You want your own pieces to see lots of squares and enemy pieces, and you want to find squares where the enemy's pieces see nothing at all.",
    ],
  },
  {
    id: 49,
    title: "Attacking and Defending: Four Ways to Meet a Threat",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 3",
      instruction: "You're Black in check from the bishop on b5. Block with a developing move that also attacks the bishop.",
      solutions: ["Bd7", "Nd7", "Nc6"],
      success: "Right: a block that develops and attacks (here Bd7) is the most forcing defence. Avoid ...Qd7?? — the bishop takes her!",
    },
    slides: [
      "When a piece of yours is attacked, you can respond in four ways: move it, capture the attacker, protect it, or block the attack. Which one is best depends on the situation, and it's worth always considering all four before you move.",
      {
        text: "Blocking is the only option when a king is in check from a bishop and can't move or capture it. After 1. e4 c5 2. Nf3 d6 3. Bb5+, Black can block on c6 or d7 with a knight, on d7 with the bishop (best, because it attacks White's bishop back), or on d7 with the queen (a blunder: the bishop takes her).",
        diagram: {
          fen: "rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 3",
          caption: "Check! Block on c6 or d7. Blocking with a piece that attacks back (Bd7) is the most forcing.",
          highlights: ["c6", "d7"],
        },
      },
      "Moving the attacked piece is best when it can go somewhere better, like capturing a loose piece or creating its own threat. Capturing the attacker is good when the trade is equal or favourable. Protecting is good when the defender also improves its own position. Blocking is best when the blocker attacks something in return.",
      "A defence is also about values. A knight attacking a queen can't be attacked back, and even if the knight is protected the queen is in danger, because losing a queen for a knight is a big loss. A rook attacking a bishop is different: if the bishop is protected by a pawn, a rook capture on it loses 5 points for 3. So the defender can calmly add protection instead of running.",
      {
        text: "Seeing a piece is not attacking it. After 1. e4 e5 2. Bc4 Nc6, White's bishop sees the f7 pawn, but Bxf7+ Kxf7 just loses a bishop for a pawn, because the king protects f7. A threat is only a threat if capturing really wins something.",
        diagram: {
          fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
          caption: "The bishop sees f7, but f7 is defended by the king, so it's not a real attack.",
          highlights: ["f7", "c4"],
        },
      },
      {
        text: "And finally, a rook can't attack a rook. When two rooks stand face to face, they see each other, and it is the other player's move. If you move a rook to e1 to 'attack' a rook on e8 that already protects itself or is able to take first, your opponent simply captures. Never play a move hoping your opponent won't notice the threat.",
        diagram: {
          fen: "4r1k1/5ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1",
          caption: "White's rook arrived on e1 to 'attack' the rook on e8. It's Black's move and the rooks see each other.",
          highlights: ["e1", "e8"],
        },
      },
    ],
  },
  {
    id: 50,
    title: "Forks: One Piece, Two Targets",
    level: "0-800",
    puzzle: {
      fen: "3q3r/8/7k/4N3/8/8/8/6K1 w - - 0 1",
      instruction: "You're White. Find the fork that attacks the king, the queen and the rook all at once.",
      solutions: ["Nf7+"],
      success: "Nf7+! A family fork: the king must move, and the queen falls next. Always look for knight forks when kings and queens stand a knight's move apart.",
    },
    slides: [
      "A fork is when one piece attacks two (or more) enemy pieces at the same time. Your opponent can only save one, so you win material. Forks are the easiest tactic to learn and extremely common, even among strong players.",
      {
        text: "Knights are the best forkers. When a knight attacks a pawn, bishop, rook, queen or king, that piece can't attack the knight back. Here the knight on e5 can jump to f7 with check, forking the king on h6, the queen on d8 and the rook on h8. This is called a 'family fork'.",
        diagram: {
          fen: "3q3r/8/7k/4N3/8/8/8/6K1 w - - 0 1",
          caption: "White to move: Nf7+ attacks the king, queen and rook at the same time, and none of them can capture the knight.",
          highlights: ["f7", "d8", "h8"],
        },
      },
      {
        text: "After the king steps out of check the knight takes the queen. A 'royal fork' like this often decides a game on the spot.",
        diagram: {
          fen: "3N3r/8/6k1/8/8/8/8/6K1 b - - 0 2",
          caption: "The fork wins the queen for nothing.",
        },
      },
      "Queens, pawns and bishops can fork as well. A pawn fork is especially nasty: a pawn move that attacks two pieces wins one of them, since pawns are the cheapest piece to give back. A check that also attacks another piece (a queen check forking king and bishop, say) is a fork too, because the king has to respond to the check.",
      "Not every fork wins material. Before you fork, ask yourself where the attacked pieces can go. If the opponent can move one attacked piece in a way that defends the other, the fork fails. Also ask whether the pieces you attack are actually defended: forking two protected pawns with your queen is not a fork at all, since taking either one just loses the queen.",
      "Defensively, watch for squares that your opponent's knight can jump to. A good habit is to check, before each move, every square where an enemy knight could land with check or double attack. Moving your king and queen off squares that share a knight's move with your other pieces avoids a lot of trouble.",
    ],
  },
  {
    id: 51,
    title: "Pins: Absolute and Relative",
    level: "0-800",
    puzzle: {
      fen: "rnbqk1nr/pppp1ppp/4p3/8/1b1P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 2 3",
      instruction: "You're White. Your knight on c3 is pinned against your king. Challenge the pinning bishop with a pawn move.",
      solutions: ["a3"],
      success: "a3! The pawn attacks the bishop. If it takes on c3 the doubled pawns are a minor concession, and White gets the bishop pair. Pins are broken by attacking the pinner.",
    },
    slides: [
      "A pin is when a piece can't (or shouldn't) move because a more valuable piece sits behind it on the same line. Bishops, rooks and queens create pins because they move along lines. Pins are simple but strong: they freeze pieces, and frozen pieces are easy to attack.",
      {
        text: "A relative pin: the piece could legally move, but doing so would lose a more valuable piece. Here Black's bishop on g4 pins White's knight on f3 against the queen on d1. If the knight moves, the bishop takes the queen.",
        diagram: {
          fen: "rn1qkbnr/ppp1pppp/8/3p4/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3",
          caption: "A relative pin: the knight can move, but then the queen would be lost.",
          highlights: ["g4", "f3", "d1"],
        },
      },
      {
        text: "An absolute pin: the piece behind is the king, so moving the pinned piece is illegal. Here Black's bishop on b4 pins the white knight on c3 against the king on e1. Chess software won't let you move the knight at all.",
        diagram: {
          fen: "rnbqk1nr/pppp1ppp/4p3/8/1b1P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 2 3",
          caption: "An absolute pin: the knight can't move without exposing its own king to check.",
          highlights: ["b4", "c3", "e1"],
        },
      },
      "Once you have a piece pinned, pile on the pressure. Attack it again with another piece, ideally with something cheaper than the pinned piece. In the Bg4 example, a second attacker such as a black knight landing on d4 attacks the pinned knight twice, and the pinned knight cannot take back because it would expose the queen. The opponent is left with awful options.",
      "Defending against pins: break the pin by moving the king or the more valuable piece behind, attack the pinning piece (for example a3 against a bishop on b4), block, or add enough protection that the pinned piece is safe. Be careful, too, when blocking a check: blocking can walk your own piece into a pin.",
      "Pins are not limited to bishops. A rook that pins a knight to a king along a file works just as well, and a queen can pin along any line. Even a pinned piece can still give check or defend squares in certain cases, but a pinned piece cannot capture in a direction that breaks the pin line. Keep your own king and queen off lines where an enemy bishop or rook can pin something in front of them.",
    ],
  },
  {
    id: 52,
    title: "Skewers: The Pin in Reverse",
    level: "0-800",
    puzzle: {
      fen: "5r2/8/3k4/8/8/8/3B4/6K1 w - - 0 1",
      instruction: "You're White. Black's king and rook share a diagonal. Skewer them.",
      solutions: ["Bb4+"],
      success: "Bb4+! The king has to move, and then the bishop captures the rook on f8. Skewers are pins in reverse: the more valuable piece is in front.",
    },
    slides: [
      "A skewer is like a pin turned around: you attack a valuable piece that must move, and when it does, you capture the piece behind it. Most skewers involve a king, because the king is forced to move out of check and can't protect what stands behind it.",
      {
        text: "Here Black has left a king and a rook on the same diagonal. White plays Bb4+. The king must step out of check, and the bishop will capture the rook on f8.",
        diagram: {
          fen: "5r2/8/3k4/8/8/8/3B4/6K1 w - - 0 1",
          caption: "Bb4+ is a skewer: the king d6 is in front of the rook on f8 along the same diagonal.",
          highlights: ["d2", "b4", "d6", "f8"],
        },
      },
      {
        text: "Another favourite is the file skewer with a rook or queen. Black's queen stands behind the king on the e-file, so Re1+ wins her.",
        diagram: {
          fen: "4q3/8/4k3/8/8/8/6K1/1R6 w - - 0 1",
          caption: "Re1+ skewers the king and queen on the e-file.",
          highlights: ["b1", "e1", "e6", "e8"],
        },
      },
      "How to defend once skewered: you can't save both pieces, but you can often get something back. After Re1+ the king should move to d7 or f7, next to the queen's square, so that when the rook captures on e8 the king takes the rook back (a queen for a rook is a bad trade for you, but much better than losing the queen for nothing).",
      "How to prevent skewers: look at the lines your king and queen (or king and rook) share. Don't leave a king and a more valuable piece on the same rank, file or diagonal if an enemy rook, bishop or queen could reach that line with check. Also watch for loose pieces in the endgame: one tempo can be the difference.",
      "How to find skewers: look for a valuable enemy piece that is lined up behind another valuable piece, and ask whether you have a safe check or attack on the front piece. Combine the skewer with a fork or a discovered attack for even bigger effects.",
    ],
  },
  {
    id: 53,
    title: "Discovered Attacks and Discovered Checks",
    level: "0-800",
    puzzle: {
      fen: "3q3k/5p1p/6p1/8/3N4/8/1B3PPP/6K1 w - - 0 1",
      instruction: "You're White. Move the knight with discovered check and win the queen.",
      solutions: ["Ne6+", "Nc6+"],
      success: "Ne6+! The bishop gives check from behind the knight while the knight attacks the queen. Discovered checks are among the strongest weapons in chess.",
    },
    slides: [
      "To get better at tactics you must see how the board changes when a piece moves: what pieces behind it suddenly see. A discovered attack is when you move one piece to reveal an attack by another piece behind it. The moving piece can create its own threat at the same time, so your opponent is faced with two problems.",
      {
        text: "Here White's rook on e1 is hidden behind the bishop on e3. If the bishop moves to c5, it attacks the rook on f8, while the rook on e1 suddenly attacks the black queen on e6. Black will move the queen (the bigger threat), and the bishop captures the rook.",
        diagram: {
          fen: "5rk1/ppp2ppp/4q3/8/8/4B3/PPP2PPP/R3R1K1 w - - 0 1",
          caption: "Bc5! A discovered attack: the bishop hits the rook while the rook behind it hits the queen.",
          highlights: ["e3", "c5", "e1", "e6", "f8"],
        },
      },
      "Notice that this works only because the white rook is protected (by the other rook), so Black can't simply win it with the queen. As always, check that your hidden attacker is safe.",
      {
        text: "The discovered check is the most powerful form: the piece that moves reveals a check on the enemy king. Because the king must respond to check, the moving piece can do almost anything it wants, such as attacking the queen. Here the bishop on b2 is blocked by the knight on d4. Wherever the knight goes, it gives check. Ne6 or Nc6 attacks the queen as well.",
        diagram: {
          fen: "3q3k/5p1p/6p1/8/3N4/8/1B3PPP/6K1 w - - 0 1",
          caption: "The knight moves with discovered check from the bishop on b2 and attacks the queen on d8 at the same time.",
          highlights: ["d4", "b2", "e6", "c6", "d8"],
        },
      },
      {
        text: "After 1. Ne6+ Black has to deal with the check. Whatever Black does, the knight captures the queen (or the bishop does, if the queen blocks on f6).",
        diagram: {
          fen: "3N2k1/5p1p/6p1/8/8/8/1B3PPP/6K1 b - - 0 2",
          caption: "The queen is lost for nothing.",
        },
      },
      "Defensive advice: keep your king away from lines where an enemy piece sits behind one of its own pieces, and be careful with the king in the corner or on the back rank. When you attack, always look for batteries you can 'unmask' with tempo, especially with checks, since a check forces an immediate response and leaves you a free hand for the second threat.",
    ],
  },
  {
    id: 54,
    title: "Strategy vs Tactics: Finding Weak Pieces",
    level: "0-800",
    puzzle: {
      fen: "r5k1/5ppp/8/8/1b6/7P/4QPP1/6K1 w - - 0 1",
      instruction: "You're White. Black's rook and bishop are both unprotected. Find the queen move that attacks both.",
      solutions: ["Qe4"],
      success: "Qe4! The rook on a8 can't be captured only because it's a back-rank mate threat, so Black must move it, and the queen picks up the bishop on b4.",
    },
    slides: [
      "Tactics are short forcing sequences that win material quickly. Strategy is the long-term side of chess: improving your position, creating plans, and judging a position even when material is equal. The two meet at weaknesses. A weakness is a piece, a square or an area of the board that is poorly protected and can be exploited, immediately or over time. Learning to see weaknesses is the first step toward strategic thinking.",
      "The simplest weakness is a loose (undefended) piece. Get into the habit of scanning your opponent's position for pieces that nothing protects, remembering that pawns only protect diagonally forward. Then ask how to attack that piece: with a pin, a fork, or just a direct attack. Do the same for your own pieces, because a loose piece of yours is a gift to the opponent.",
      {
        text: "Here both sides have equal material, but Black's rook on a8 and bishop on b4 are both undefended. White has a queen that can attack both at once: 1. Qe4. If the queen takes the rook it would be back-rank mate, so Black must save the rook, and then the queen takes the bishop.",
        diagram: {
          fen: "r5k1/5ppp/8/8/1b6/7P/4QPP1/6K1 w - - 0 1",
          caption: "Qe4 forks the loose rook on a8 and the loose bishop on b4.",
          highlights: ["e4", "a8", "b4"],
        },
      },
      {
        text: "Weaknesses are not always so obvious. In this endgame White is only a pawn up, but Black's pawns on b7 and c6 can be attacked together by the knight. After Na5, the b7 pawn is attacked, and if it advances then c6 is no longer protected. White wins a second pawn.",
        diagram: {
          fen: "8/1p6/2p1k3/8/2N5/8/8/6K1 w - - 0 1",
          caption: "Na5 attacks b7 and c6. Looking for weaknesses means looking for any undefended pawn, not only for a hanging queen.",
          highlights: ["a5", "b7", "c6"],
        },
      },
      "This is how strategy and tactics interact: you find the weakness with strategic thinking and then exploit it with a tactic. The next courses look at two more types of weakness: weak squares and a lack of space.",
    ],
  },
  {
    id: 55,
    title: "Weak Squares and Colour Complexes",
    level: "0-800",
    puzzle: {
      fen: "6k1/5p1p/5QpB/8/8/8/8/6K1 w - - 0 1",
      instruction: "You're White. All of Black's pawns are on light squares. Finish the game on the dark squares.",
      solutions: ["Qg7"],
      success: "Qg7#! Protected by the bishop on h6, the queen lands on the weak dark square next to the king. A colour complex is a real weakness.",
    },
    slides: [
      "Squares can be weak just as pieces can. A square is weak if enemy pieces can use it and your pieces and pawns can't challenge it. Two questions help: is the square defended, and are the nearby pawns on the opposite colour from the square? Pawns only protect squares of their own colour, so a king surrounded by pawns on light squares leaves the dark squares next to it with no pawn cover at all.",
      {
        text: "Here Black's pawns on f7, g6 and h7 all stand on light squares. The dark squares f6, g7 and h6 around the king have no pawn defending them. White's queen and dark-squared bishop, which move on those very squares, simply walk in. Black is almost out of legal moves, and after the only legal move ...g5, Qg7 is checkmate.",
        diagram: {
          fen: "6k1/5p1p/5QpB/8/8/8/8/6K1 b - - 0 1",
          caption: "A colour-complex net: all Black pawns on light squares, White's queen and bishop on the dark squares around the king.",
          highlights: ["f6", "g7", "h6"],
        },
      },
      {
        text: "The same attack on light squares works when the pawns are on dark squares. A pawn structure with pawns of mixed colours is much sturdier: moving a single pawn from h6 to g6 turns an overwhelming attack into an equal position.",
        diagram: {
          fen: "6k1/5pp1/7p/8/8/8/8/6K1 w - - 0 1",
          caption: "With pawns on f7, g7 and h6 (mixed colours) the king is much better protected than with all pawns on one colour.",
          highlights: ["f7", "g7", "h6"],
        },
      },
      "Practical advice: when you think about moving a pawn next to your king, ask which colour squares you will no longer cover. If you've lost a bishop of that colour, be extra careful, because there'll be no piece to cover the holes either. Likewise, when you attack, look at which colour of squares your opponent's pawns have abandoned and bring a piece (a bishop of that colour, or the queen) to use them.",
      "Weak squares are also central to good middlegame play: an outpost for your knight is nothing but a weak square in the enemy's position. We study that in more advanced courses. For now, the important habit is to look at both the pieces and the squares around a king before deciding on a plan, and to count how many of your opponent's pieces could reach the weak squares compared with your own defenders.",
    ],
  },
  {
    id: 56,
    title: "Space: Controlling Squares in the Enemy Half",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq d3 0 2",
      instruction: "You're Black after 1. e4 e6 2. d4. Challenge White's space in the centre with a pawn that stakes your own claim.",
      solutions: ["d5"],
      success: "d5! The French Defense: you contest the centre instead of letting White take all the space.",
    },
    slides: [
      "Space means the number of squares you control in your opponent's half of the board (their four ranks). 'Control' means one of your pieces could capture on that square. If you control many such squares, your pieces have room to manoeuvre and your opponent's pieces are cramped. In this opening position, White controls 9 squares in Black's half after only four moves, while Black controls 2 in White's. Black has played passively and has cramped its own bishops.",
      {
        text: "Compare that with a position where both players fight for the centre. After the Scotch Opening line shown here, the counts are much closer. Both sides taking as much space as they can without leaving pieces hanging is the ideal.",
        diagram: {
          fen: "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
          caption: "White controls 9 squares in Black's half, Black controls 4 in White's: close, but White has an edge.",
        },
      },
      {
        text: "The opening principles explain how to win space: pawns in the centre, pieces developed to central squares. Here White has taken the centre with pawns on e4 and d4 while Black has played passively with ...e6 and ...d6.",
        diagram: {
          fen: "rnbqk2r/ppp1bppp/3ppn2/8/3PP3/2NB4/PPP2PPP/R1BQK1NR w KQkq - 4 5",
          caption: "White: 9 squares in Black's half. Black: 2 in White's.",
        },
      },
      "Space is not permanent: it changes with every move. If you lack space, trade the opposing pieces (or pawns) that cramp you. If you have more space, don't rush to trade: a rook that controls lots of squares is worth far more than a rook that controls none. Even trades are not always equal when you take space into account.",
      "Think of the game as a fight over the board. In a position where White controls 14 squares in Black's territory and Black controls two, White probably wins; remove all the queens and rooks and the same position becomes equal, because the space advantage vanishes with the pieces that created it. This is why 'when ahead in space, avoid exchanges; when cramped, exchange' is a golden rule.",
    ],
  },
  {
    id: 57,
    title: "Open vs Closed Positions",
    level: "0-800",
    puzzle: {
      fen: "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      instruction: "You're Black in the French Advance. Attack the base of White's pawn chain.",
      solutions: ["c5"],
      success: "c5! You hit d4, the base of the chain. If d4 falls or is exchanged, e5 loses its support. That is the standard way to undermine a closed structure.",
    },
    slides: [
      "Whether a position is open or closed depends on just one thing: the pawns. Think of the pawns as a fence. Start with 16 pawns locked together and you get a closed position, where pieces are blocked and lines are shut. Trade off pawns and the fence has gaps: you get an open position where long-range pieces can see across the whole board.",
      {
        text: "The most closed position imaginable: both fences pressed against each other and no pawn can move forward. No real game looks like this, but it shows the idea: the more pawns, and the more they're locked, the more closed the position.",
        diagram: {
          fen: "rnbqkbnr/8/8/pppppppp/PPPPPPPP/8/8/RNBQKBNR w KQkq - 0 1",
          caption: "The most closed position possible: all 16 pawns are blocked head to head.",
        },
      },
      {
        text: "Now an open position. Pawns have been traded, and queens, rooks and bishops see from one side of the board to the other. Beginners often forget how big the board is: a bishop on b6 can attack something on the far side if nothing is in between.",
        diagram: {
          fen: "r2q1rk1/p4ppp/1b6/8/8/2B2Q2/P4PPP/R4RK1 w - - 0 1",
          caption: "Open: long diagonals and files, with few pawns to block them.",
        },
      },
      "Neither type is better in itself. Open positions suit bishops and rooks: if your opponent has two bishops and you have none, you might want to keep the game closed. If you have the bishops, open it up. In closed positions knights shine, because they can jump over the blockades. The question is always which structure helps your pieces more than your opponent's.",
      {
        text: "Closed positions require a plan to break through. In the French Defense, Advance Variation, White's pawn on e5 is supported by d4 and takes space. Black's standard answer is ...c5, hitting the base d4 of the chain. If d4 disappears, e5 becomes weak.",
        diagram: {
          fen: "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq c6 0 4",
          caption: "Black strikes at the base of the pawn chain with ...c5. Pushing pawns to undermine the opponent's structure is the usual way to break through.",
        },
      },
      {
        text: "The King's Indian Defense is a famous closed structure: White pushes pawns on the queenside, Black pushes on the kingside. Both sides keep a lot of pawns and a break like ...f5 or ...f4 is the key to opening play near the opposing king.",
        diagram: {
          fen: "r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 1",
          caption: "A typical King's Indian structure: closed centre, with the real action on the wings.",
        },
      },
    ],
  },
  {
    id: 58,
    title: "Choosing and Learning Openings with White",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6 0 2",
      instruction: "You're White playing the London System. Play the signature second move.",
      solutions: ["Bf4"],
      success: "Bf4! The bishop comes out before e3 closes its diagonal. You'll play this move against almost anything Black does.",
    },
    slides: [
      "Moving from beginner to intermediate means choosing an opening repertoire on purpose. The factors are personal: your memory, how much time you can study, how patient you are, and whether you like solid or wild positions. There's no 'best' opening for everybody, but there is one key rule: stick to the same first move and the same opening as much as possible. Repetition builds the understanding that makes you better prepared than most opponents.",
      "An analogy: a boxer who has trained orthodox (left foot forward) will fall over if he suddenly switches to southpaw. In chess, playing 1. d4 one game, 1. e4 the next and 1. c4 the third means you never learn any of them deeply. Pick a first move that leads to real, studied openings (not a flank pawn like a4 or h4) and then stay with it.",
      {
        text: "1. d4 is the simplest to learn. It leads to the London System, the Queen's Gambit, the Trompowsky Attack and others. The London is the 'laziest' option: against almost any Black reply, you can put your bishop on f4 on move two and build the same setup. You'll reach similar positions game after game, while your opponents (who face many different White openings) are less prepared.",
        diagram: {
          fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
          caption: "The London System: a one-size-fits-all setup for White. The only replies that disturb it are 1...e5 and 1...g5-type tricks, which you can punish by capturing the pawn.",
        },
      },
      {
        text: "1. e4 is different. There's no single setup for White, so you need a plan against Black's most common replies: the symmetrical 1...e5 (with the Italian, Spanish or Scotch) and the Sicilian 1...c5, plus the French, Caro-Kann, Scandinavian, Pirc and so on. The learning curve is steeper. In return, you get a greater variety of positions and sometimes a winning position within the first ten moves.",
        diagram: {
          fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
          caption: "After 1. e4 e5 White needs an opening plan, and after 1. e4 c5 a completely different one.",
        },
      },
      "Statistics help, but they are not a rule: at an average rating of 1600, 1. e4 e5 has been reached about 56 million times and 2. Nf3 about 35 million. The Vienna System (2. Nc3) has only been reached about 3 million times, which means you quickly take your opponent out of the territory they know best. Opening choices that are less common at grandmaster level but still score well are great practical weapons for intermediate players.",
      "Whichever opening you choose, use engines, databases and your own game statistics. After each loss, go back to the opening and check whether it went wrong there. Study the best replies at each stage, then play lots of games to see which ones really occur. That cycle of study, play and review is how openings are really learned.",
    ],
  },
  {
    id: 59,
    title: "Choosing and Learning Openings with Black",
    level: "800-1300",
    puzzle: {
      fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R b KQkq - 3 5",
      instruction: "You're Black in the Pirc setup. Complete your development by tucking the king away.",
      solutions: ["O-O"],
      success: "O-O! Knight, pawn, bishop, pawn, castle: the whole setup is on the board and you'll aim for it again and again.",
    },
    slides: [
      "Black has the harder job. White decides how the game begins, so Black needs an answer to every serious first move: 1. e4, 1. d4, 1. c4 (the English) and 1. Nf3 (the Réti). Over 99 percent of games start with a handful of these, and if White plays something strange, fall back on the golden moves: take the centre, develop, castle.",
      {
        text: "Against 1. e4 you might choose the Sicilian, the Caro-Kann, the French or the Scandinavian. But your answer to 1. e4 can't be used against 1. d4, which leads to entirely different positions. Some players keep a separate system for each White first move; others prefer a single setup.",
        diagram: {
          fen: "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
          caption: "Against 1. e4 the Caro-Kann is one option. After 1. d4 you'd need a different system.",
        },
      },
      {
        text: "A setup that works almost against anything is the King's Indian/Pirc: ...d6, ...Nf6, ...g6, ...Bg7 and castling. It's like the London for Black. It saves study time and gives you familiar positions, but it might bore you, and it might simply not suit your style. If you keep losing with it, it's fine to change.",
        diagram: {
          fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R b KQkq - 3 5",
          caption: "The Pirc setup after 1. e4. Black plays the same moves against 1. d4 (King's Indian) as well.",
        },
      },
      "This is part of why playing Black is harder than playing White: there are many setups to choose from, and opponents who have played one opening thousands of times often know it better than you know your reply. Pick answers to the White openings you actually meet, and prefer those that leave your opponent uncomfortable.",
      "Remember that main lines at the top level can be 30 or 40 moves of memorised theory: one Najdorf Sicilian position has appeared hundreds of times 41 moves deep. You do not need that. What works for grandmasters is often not best for beginners and intermediates; a simpler line with fewer traps or a rarer line that takes the opponent out of their preparation is often a better practical choice.",
      "Make a short plan. 1) Pick one answer to 1. e4 and one to 1. d4 (or one all-purpose setup). 2) Learn the first five or six moves and the typical middlegame plans. 3) After each game, review your first ten moves. 4) Keep a log of the lines you keep getting wrong. A small repertoire that you know really well beats a huge one you half-remember.",
    ],
  },
  {
    id: 60,
    title: "The London System in Depth",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkbnr/pp2pppp/8/2pp4/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq c6 0 3",
      instruction: "You're White in the London after 1. d4 d5 2. Bf4 c5. Black attacks your central pawn. Support it with a pawn move.",
      solutions: ["c3", "e3"],
      success: "Good: c3 (or e3) supports d4 and prepares to meet ...Qb6. Keep your pyramid intact.",
    },
    slides: [
      "The London System is a perfect first repertoire for White: it requires little study and can be played against almost anything. The basic idea is to put a pawn in the centre (d4), develop the dark-squared bishop to f4 before closing the diagonal with e3, and then develop the rest of the pieces around a sturdy pawn pyramid.",
      {
        text: "This is what White aims for: pawns on c3, d4 and e3 form a pyramid; the bishops sit on f4 (or g3) and d3; knights go to f3 and d2; and then castle kingside. It's a closed structure that's hard for Black to break through.",
        diagram: {
          fen: "r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/2PBPNB1/PP1N1PPP/R2QK2R b KQ - 2 8",
          caption: "A typical London setup after eight moves each.",
        },
      },
      {
        text: "Is there any way for Black to prevent the London? Only 1...e5, the Englund Gambit. It is a free pawn for White: just capture it with 2. dxe5 and develop naturally with knights to c3 and f3. There are a couple of nasty traps in the line that can cost White the queen, so study them with an engine, but the gambit is unsound if you know what you're doing.",
        diagram: {
          fen: "rnbqkbnr/pppp1ppp/8/4P3/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2",
          caption: "The Englund Gambit: 1...e5 prevents Bf4, but White simply captures the pawn.",
        },
      },
      {
        text: "Black's most effective response is ...c5, opening the queen's diagonal toward b6 and the undefended b2 pawn, and attacking the d4 pawn. The solution is to play c3, supporting d4 and covering b-side weaknesses. If Black captures on d4, you recapture with the c- or e-pawn.",
        diagram: {
          fen: "r1b1kbnr/pp2pppp/1qn5/2pp4/3P1B2/2P1P3/PP3PPP/RN1QKBNR w KQkq - 1 5",
          caption: "Black attacks b2 with ...Qb6. White should know a few ways to defend, such as Qb3 or Qc1.",
        },
      },
      "Even the most 'lazy' opening needs study. Look at how engines handle moves two, three and four for Black and keep notes on what you learned. As you get familiar, you'll add your own refinements, like a spice in a recipe: different move orders and piece placements against less accurate Black play.",
      "The London has been played over 20 million times online in a three-year period (January 2020 to January 2023). That popularity means opponents see it a lot, but it also means there is a huge number of games to learn from.",
    ],
  },
  {
    id: 61,
    title: "The Vienna System",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
      instruction: "You're White in the Vienna after 1. e4 e5 2. Nc3 Nf6. Strike at the centre with the Vienna Gambit.",
      solutions: ["f4"],
      success: "f4! The Vienna Gambit. If Black takes, e5 chases the knight and White takes control of the centre.",
    },
    slides: [
      "If you open 1. e4, the Vienna System is an excellent practical weapon against 1...e5. Instead of the usual 2. Nf3, White plays 2. Nc3. It's one of the highest-scoring openings at beginner and intermediate level because it's easy to understand and packed with traps. At the time of the book's writing the author had played it over 450 times online with a 70 percent win rate.",
      {
        text: "The main idea is to follow up with f4, the Vienna Gambit. After 2...Nf6 3. f4, White offers a pawn to open the f-file and build a big centre. If Black takes with 3...exf4, then 4. e5 attacks the knight and White's win rate rises to 64 percent.",
        diagram: {
          fen: "rnbqkb1r/pppp1ppp/5n2/4P3/5p2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 4",
          caption: "The knight on f6 is attacked by the pawn on e5. Black must retreat.",
        },
      },
      {
        text: "Black's best is to retreat 4...Ng8 (4...Qe7 also exists). White then plays 5. Nf3, which develops a piece and stops ...Qh4+. White is still a pawn down but has a dominant centre and two pieces ready, while Black has none. The pawn on f4 will be won back with d4 and a bishop attack.",
        diagram: {
          fen: "rnbqkbnr/pppp1ppp/8/4P3/5p2/2N2N2/PPPP2PP/R1BQKB1R b KQkq - 2 5",
          caption: "White has the centre and the lead in development.",
        },
      },
      {
        text: "A second trick appears if Black mirrors White: 2...Nc6 3. Bc4 Bc5. Now 4. Qg4! attacks g7 and threatens to trap the rook after Qxg7. White wins about 63 percent of the time from here. Black must find an accurate defence (such as ...Qf6 or ...Nf6) immediately.",
        diagram: {
          fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P1Q1/2N5/PPPP1PPP/R1B1K1NR b KQkq - 5 4",
          caption: "The queen eyes g7 and the g-file: a trap for players who copy White's moves.",
        },
      },
      "Remember that the Vienna only works against 1...e5. If Black plays the Sicilian, French or Caro-Kann, the ideas above don't apply and you might get into trouble quickly if you try them. So study it together with your answers to the other replies. One good thing about the Vienna is that fewer players have prepared against it than against 2. Nf3 lines.",
    ],
  },
  {
    id: 62,
    title: "Against the Sicilian and the Closed Defenses: Alapin and the Advance Variations",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
      instruction: "You're White after 1. e4 c5. Play the quiet Alapin move that prepares d4.",
      solutions: ["c3"],
      success: "c3! The Alapin: you'll follow with d4 and take over the centre while leaving most of your opponent's Sicilian preparation unused.",
    },
    slides: [
      "If you play 1. e4, you must be ready for 1...c5, the Sicilian. The author does not recommend the Sicilian to beginners and intermediates because it is extremely complicated, but opponents will play it anyway after seeing top players use it. The Vienna ideas don't work against it, so you need a separate plan. A good low-theory recommendation is the Alapin Variation: 2. c3.",
      {
        text: "The point of 2. c3 is to play 3. d4 next and get two pawns in the centre, challenging Black's c5 pawn. It removes most of the theory that Black spent time learning, because few players study the Alapin. Black's two most common replies are 2...Nc6 and 2...d6, which together make up about 53 percent of games online; White scores well after d4 in both.",
        diagram: {
          fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
          caption: "The Alapin Sicilian: White prepares d4.",
        },
      },
      {
        text: "After 2...Nc6 3. d4 (or after 2...d6 3. d4), White gets the centre that White wanted. Black's best strategy is to exchange pawns and challenge it with pieces, but you can enter these positions with a clear plan.",
        diagram: {
          fen: "r1bqkbnr/pp1ppppp/2n5/8/3PP3/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
          caption: "White has two central pawns and an open c-file.",
        },
      },
      {
        text: "Against the French and the Caro-Kann, the recommendation is the Advance Variation. When Black attacks with ...d5, White doesn't capture but pushes the pawn to e5. That cramps Black's pieces (the knight can't use f6 or d6) and makes development harder. Black has to spend time breaking up your centre while you develop quickly.",
        diagram: {
          fen: "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
          caption: "The French Advance. The pawn on e5 restricts Black's knight and the bishop on c8.",
        },
      },
      {
        text: "The Caro-Kann Advance is the same idea. Black will usually get the bishop out to f5 first, and has several ways to counter-strike such as ...c5; study them before you rely on this line.",
        diagram: {
          fen: "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
          caption: "The Caro-Kann Advance: the same space-gaining pawn push.",
        },
      },
      "In both advance lines the lesson is the space principle from Chapter Eight: lack of space is a major problem for lower-rated players and choking an opponent often provokes rash moves. Remember to prepare your replies to Black's most common counter-strikes, or the space can become a liability.",
    ],
  },
  {
    id: 63,
    title: "The Scandinavian Defense",
    level: "800-1300",
    puzzle: {
      fen: "rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 3",
      instruction: "You're Black in the Scandinavian. White's knight attacks your queen. Move her to the usual safe square.",
      solutions: ["Qa5"],
      success: "Qa5! Out of reach of the knight and ready for ...c6 and ...Nf6. This move is the heart of the Scandinavian.",
    },
    slides: [
      "Against 1. e4, about 90 percent of the games you play with Black will start with either e4 or d4, and e4 is about 2.5 times as popular as d4. One of the two practical weapons against 1. e4 is the Scandinavian Defense: 1...d5. It forces White to decide immediately whether to capture, and White usually does. You recapture with the queen and the game follows your plan instead of White's.",
      {
        text: "After 1. e4 d5 2. exd5 Qxd5, Black has broken the rule about early queen moves, but there's a safe way to do it. White's natural 3. Nc3 attacks the queen, and Black simply rotates her to a5, where she's hard to attack again. Remember: slide the queen to a5.",
        diagram: {
          fen: "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
          caption: "The queen on a5 is safe, active, and pins the knight on c3 against the e-file in some lines.",
        },
      },
      "There's one more move you must remember: ...c6. It gives the queen an escape square on c7 or d8 if White finds another way to harass her. You can play it right away, or keep it in mind if White starts to manoeuvre a piece toward the queen. The rest of your plan is the normal one: develop the knights and bishops, then castle.",
      {
        text: "A typical set-up: ...Nf6, ...c6, ...Bf5, ...e6, with a safe king and an active queen. Every piece has been developed to an active square and the queen still has her escape route.",
        diagram: {
          fen: "rn2kb1r/pp3ppp/2p1pn2/q4b2/2BP4/2N2N2/PPPB1PPP/R2QK2R w KQkq - 0 8",
          caption: "A solid Scandinavian position with all pieces developed.",
        },
      },
      "Why choose it? It's straightforward to learn, it gives you consistent positions, and most opponents have not prepared against it. White needs to know about 15 to 20 moves of engine theory to get a meaningful edge, which is unlikely at club level. The main drawback is that the queen is exposed in the centre from move two: if you forget where she should go, you can lose her. Make a habit of checking, every single move, which squares your queen can safely retreat to.",
    ],
  },
  {
    id: 64,
    title: "The Caro-Kann Defense in Depth",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      instruction: "You're Black in the Caro-Kann Advance. Strike at White's centre with the typical counter-blow.",
      solutions: ["c5"],
      success: "c5! You hit the d4 pawn and undermine e5. Against the Advance you should always remember to attack the base of the chain.",
    },
    slides: [
      "The Caro-Kann is the author's favourite opening, one he has played from beginner level to International Master and used to beat many grandmasters. It begins 1. e4 c6 and can only be played against 1. e4. It's a building-block opening: the c6 pawn will support a pawn on d5, so when White builds a two-pawn centre with 2. d4, Black plays 2...d5 and the pawn is protected.",
      {
        text: "The position after 2...d5 forces White to decide what to do about the attack on e4. The Caro-Kann then goes in three directions: White can advance with e5 (Advance Variation), exchange on d5 (Exchange Variation), or defend the e-pawn with a piece or pawn.",
        diagram: {
          fen: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3",
          caption: "The Caro-Kann tension: Black's d5 pawn attacks e4.",
        },
      },
      {
        text: "Against the Advance Variation, respond with 3...c5! It sacrifices a pawn in a sense, but it undermines White's centre by hitting the d4 pawn, and both of White's central pawns become vulnerable. In online databases Black already scores better than White after just three moves, and if you learn a few more moves you may win 60 percent or more.",
        diagram: {
          fen: "rnbqkbnr/pp2pppp/8/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
          caption: "The key counter-strike against the Advance: ...c5.",
        },
      },
      {
        text: "If White defends the e-pawn instead (for example with Nc3), simply capture: ...dxe4. After White recaptures, White no longer has two pawns in the centre and Black plays ...Nf6, offering a trade of knights. If White takes on f6, you can recapture with either the e- or g-pawn, each with its own plans.",
        diagram: {
          fen: "rnbqkb1r/pp2pppp/2p2n2/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
          caption: "Black is perfectly fine: White has only one central pawn.",
        },
      },
      {
        text: "In the Exchange Variation White captures d5 right away and Black recaptures with the c-pawn. White does not have two pawns in the centre, so Black can develop knights and bishops naturally, castle and enjoy a healthy position.",
        diagram: {
          fen: "rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
          caption: "The Exchange Variation: a symmetrical, solid position.",
        },
      },
      "The Caro-Kann is solid and strong at every level. It forces White to commit early and rarely leaves Black with a bad position. As with every opening, study your own games: whenever White surprises you with a different line, add it to your notes.",
    ],
  },
  {
    id: 65,
    title: "The Queen's Gambit Declined Setup for Black",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2",
      instruction: "You're Black after 1. d4 d5 2. c4. Decline the gambit in the solid, traditional way.",
      solutions: ["e6"],
      success: "e6! You keep a pawn in the centre and avoid giving White the central control. The QGD is solid and easy to learn.",
    },
    slides: [
      "Against 1. d4 the author recommends the Queen's Gambit Declined (QGD). Because d4 openings (the London, the Queen's Gambit) develop more slowly, there are fewer immediate traps for Black. The Scandinavian and Caro-Kann can't be played against d4, so you need this separate plan.",
      {
        text: "Start by mirroring with 1...d5. If White plays the Queen's Gambit with 2. c4, decline the offered pawn by playing 2...e6. That keeps a pawn in the centre and defends the d5 pawn. If White captures on d5, you recapture with the e-pawn.",
        diagram: {
          fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
          caption: "The Queen's Gambit Declined: the e6 pawn protects d5.",
        },
      },
      {
        text: "From here develop the kingside: knights to f6 (and c6/d7 later), bishop to e7, and castle. Since the pawn on e6 blocks the light-squared bishop, prepare to put it on b7 with ...b6. From b7 it supports d5 and will be well placed once the centre opens up.",
        diagram: {
          fen: "rn1q1rk1/pbp1bppp/1p2pn2/3p2B1/2PP4/2NBPN2/PP3PPP/R2QK2R w KQ - 2 8",
          caption: "The typical QGD position: pawns on d5 and e6, bishops on e7 and b7, king castled.",
        },
      },
      "The same setup works against more than just 1. d4. Against 1. c4 (English) or 1. Nf3 (Réti) you can aim for the same formation: your c- and d-pawns are the most advanced, supported by the b- and e-pawns, your king is castled, knights are developed, and the bishops sit on e7 and b7. It's more or less the position you'll shoot for against every first move that isn't e4.",
      "Remember the principle behind it: the d- and c-pawns are best friends and like to move out together. Whatever White does, keep an eye on the centre, and be ready to adapt when White captures a pawn or plays something unexpected. A flexible setup like this one rewards you for knowing where each piece wants to go, not for memorising moves.",
    ],
  },
  {
    id: 66,
    title: "Setup Openings: King's Indian, Pirc and Dutch",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
      instruction: "You're Black in the King's Indian setup. Place the bishop on its long diagonal.",
      solutions: ["Bg7"],
      success: "Bg7! The fianchettoed bishop is the heart of the King's Indian: it eyes the whole long diagonal toward White's queenside.",
    },
    slides: [
      "Setup-based openings are the most universal options for Black. They save study time because you play almost the same moves every game. The drawback is that you are rarely the aggressor: like a counterpuncher in boxing, you build a defensive formation and wait for the moment to strike. If your opponent challenges your pieces before the setup is complete, you may have to deviate.",
      {
        text: "The King's Indian/Pirc setup works against anything. Black plays ...d6, ...Nf6, ...g6, ...Bg7 and castles. The pawn on d6 matters: it stops White from playing e5 with a gain of time against the knight on f6. In the diagram White has a big centre, and Black will attack it later.",
        diagram: {
          fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ - 3 6",
          caption: "The King's Indian: Black's pieces are ready to fight the centre.",
        },
      },
      {
        text: "The Dutch Defense begins with 1...f5. It controls the e4 square and fights for the centre in a different way. You can play it against anything except 1. e4, which would simply win a pawn. One common version is the Leningrad Dutch, where Black has a fianchettoed bishop on g7, much like the King's Indian but with the pawn on f5.",
        diagram: {
          fen: "rnbq1rk1/ppppp1bp/5np1/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w - - 4 6",
          caption: "The Leningrad Dutch: a King's Indian with the f-pawn moved forward.",
        },
      },
      {
        text: "In another version of the Dutch, Black plays ...e6 instead of ...g6, so the bishop on f8 is developed to e7 and the king is a little safer. Each setup has its own plans, positives and negatives.",
        diagram: {
          fen: "rnbq1rk1/ppppb1pp/4pn2/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w - - 4 6",
          caption: "The Dutch with ...e6: solid and quite flexible.",
        },
      },
      "A warning about the Dutch: pushing the f-pawn on move one weakens the squares around your king. You'll need to keep an eye on the diagonal leading to g8 and the e8-h5 diagonal. Pieces can see through the gaps in your pawn cover.",
      "A fianchetto is the technical name for putting a bishop on g7 or b7 (for Black), or g2 or b2 (for White). It's a recurring idea in all these systems: the bishop sits on the long diagonal behind a flexible pawn setup, and it's often the key attacking piece.",
    ],
  },
  {
    id: 67,
    title: "Gambits for White: King's Gambit and Danish Gambit",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
      instruction: "You're White in the King's Gambit after 2...exf4. Develop a piece and stop ...Qh4+.",
      solutions: ["Nf3"],
      success: "Nf3! It develops, prevents Black's queen check on h4, and prepares to take the centre with d4.",
    },
    slides: [
      "The word gambit comes from the Italian gambetto, a trip with the leg. In chess a gambit is an early sacrifice of material, usually a pawn, to gain something else: faster development, central control, or an attack. Most gambits don't win by force; they give a positional edge for a pawn that is often regained. Gambits can be accepted or declined, and the best ones are 'sprinkled' into a repertoire rather than being the whole diet.",
      "About 90 percent of White gambits start with 1. e4, because e4 opens lines for both queen and bishop and offers the most tactics. One of the most legendary is the King's Gambit: 1. e4 e5 2. f4. It dominated the Romantic era of chess in the nineteenth century, including the famous Immortal Game of 1851 (Anderssen against Kieseritzky), in which White sacrificed almost everything and still won.",
      {
        text: "If Black accepts with 2...exf4, White plays 3. Nf3, developing a piece and stopping ...Qh4+. Then White can occupy the centre with d4 and bring the bishop out to attack the f4 pawn. White has given a pawn for central control and fast development.",
        diagram: {
          fen: "rnbqkbnr/ppp2ppp/3p4/8/3PPp2/5N2/PPP3PP/RNBQKB1R b KQkq d3 0 4",
          caption: "The King's Gambit Accepted: White has an ideal centre and will win the f4 pawn back.",
        },
      },
      "Nowadays computers show that Black can equalise with best play, but in games between beginners and intermediates, best play is rare, which makes the King's Gambit a dangerous weapon that most opponents are not prepared for.",
      {
        text: "The Danish Gambit goes the other way: 1. e4 e5 2. d4 exd4 3. c3. If Black takes again with 3...dxc3, White still does not recapture but plays 4. Bc4. If Black takes a third pawn with ...cxb2, White finally takes back with Bxb2. White is three pawns down for one, but has two bishops aimed at Black's kingside and Black has no pieces developed.",
        diagram: {
          fen: "rnbqkbnr/pppp1ppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR b KQkq - 0 5",
          caption: "The Danish Gambit: two raking bishops for three pawns. Next comes Qb3, aiming at f7.",
        },
      },
      "Online, this position leads to a White win roughly 60 percent of the time, and the Danish is the most successful White gambit at club level. As always, remember that Black does not have to keep capturing pawns: study how to continue if Black declines.",
    ],
  },
  {
    id: 68,
    title: "Smith-Morra, the Queen's Gambit and Gambits That Aren't",
    level: "800-1300",
    puzzle: {
      fen: "rnbqkbnr/pp1ppppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
      instruction: "You're White offering the Smith-Morra Gambit. Black has taken on d4: offer a second pawn.",
      solutions: ["c3"],
      success: "c3! Now if ...dxc3 you recapture with Nxc3 and get rapid development and open lines for your pieces.",
    },
    slides: [
      "Gambits exist against the Sicilian too. After 1. e4 c5, White can play 2. d4. If Black captures 2...cxd4, White plays 3. c3, and if Black takes again with 3...dxc3, White recaptures with the knight: 4. Nxc3. This is the Smith-Morra Gambit. White is a pawn down, but the lines are open and the pieces develop with tempo.",
      {
        text: "A few natural moves later White typically has all the pieces out, the king castled, and a space advantage. Black's bishops are several moves from decent squares, which also keeps Black from castling. For one pawn, White has better development, a safer king and more space.",
        diagram: {
          fen: "r1bqkb1r/pp3ppp/2nppn2/8/2B1P3/2N2N2/PP2QPPP/R1B2RK1 b kq - 3 8",
          caption: "A typical Smith-Morra position: White is a pawn down but far ahead in development.",
        },
      },
      {
        text: "Not all gambits are real gambits. The Queen's Gambit (1. d4 d5 2. c4) is a gambit in name only: if Black takes, White plays e4 and gets a big centre, and White's bishop attacks the pawn on c4 to win it back. It has survived for centuries and still holds up in the computer era. It is not recommended for Black to accept at beginner or intermediate level, because that surrenders the centre.",
        diagram: {
          fen: "rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR b KQkq e3 0 3",
          caption: "After the Queen's Gambit Accepted White has a pawn centre and Black has no control of it.",
        },
      },
      "Some gambits are very dangerous to accept. The Vienna Gambit (1. e4 e5 2. Nc3 Nf6 3. f4) is an example: if Black takes the pawn without knowing the theory, White can reach a very strong position quickly. If you are Black and unsure what to do against a gambit, declining it with a solid central move is a good principle.",
      "The general rules for gambits: for White they usually lead to fast development and open lines; for Black they are much riskier, because Black already has the disadvantage of moving second. As White, pick one or two gambits and learn them deeply. As Black, know how to meet them calmly: give the pawn back at the right moment, castle, and don't get greedy.",
    ],
  },
  {
    id: 69,
    title: "Gambits for Black: Blackburne Shilling and Englund Traps",
    level: "800-1300",
    puzzle: {
      fen: "r1b1kbnr/pppp1Npp/8/8/3nq3/8/PPPPBP1P/RNBQKR2 b Qkq - 1 7",
      instruction: "You're Black in the Blackburne Shilling trap. Deliver the final blow.",
      solutions: ["Nf3#"],
      success: "Nf3#! The bishop is pinned by the queen on e4, the king has no squares, and the knight can't be captured. Mate in seven moves.",
    },
    slides: [
      "Playing a gambit with Black is much riskier. Black already moves second, and a pawn sacrifice on top makes things harder. Black gambits tend to either win quickly or lose; there is little in between. If you're happy with that, two trappy examples can be fun, with the warning that they work only against players who don't know the refutation.",
      {
        text: "The Blackburne Shilling Gambit starts from the Italian Game: 1. e4 e5 2. Nf3 Nc6 3. Bc4 and now 3...Nd4!? If White simply takes the knight with 4. Nxd4 exd4 and develops, Black is just worse. But if White grabs the free pawn with 4. Nxe5, then 4...Qg5! attacks the knight on e5 and the pawn on g2.",
        diagram: {
          fen: "r1b1kbnr/pppp1ppp/8/4N1q1/2BnP3/8/PPPP1PPP/RNBQK2R w KQkq - 1 5",
          caption: "The bluff: the queen attacks both the knight on e5 and the pawn on g2.",
        },
      },
      {
        text: "If White continues greedily with 5. Nxf7 (forking queen and rook), Black takes 5...Qxg2, attacking the rook on h1 and the pawn on e4. After 6. Rf1 Qxe4+ 7. Be2, there is a nasty final blow: 7...Nf3 is checkmate! The bishop is pinned to the king and the king has no squares.",
        diagram: {
          fen: "r1b1kbnr/pppp1Npp/8/8/3nq3/8/PPPPBP1P/RNBQKR2 b Qkq - 1 7",
          caption: "Black to move: Nf3 mates. The bishop on e2 is pinned by the queen.",
        },
      },
      "According to the Lichess database this trap has worked more than 400,000 times, even against 2800-rated players in one-minute games. At an average rating of 1600, about 18,000 games ended exactly like this. But it is a bluff: if White knows the best replies, Black ends up in a bad position, and as you climb the rating ladder the trick stops working.",
      {
        text: "The Englund Gambit is the corresponding trick against 1. d4: 1...e5. If White takes with 2. dxe5, Black plays 2...Nc6, and after 3. Nf3 Qe7 4. Bf4 there is a strong shot: 4...Qb4+! attacking the king, the bishop on f4 and the pawn on b2 at once.",
        diagram: {
          fen: "r1b1kbnr/pppp1ppp/2n5/4P3/1q3B2/5N2/PPP1PPPP/RN1QKB1R w KQkq - 5 5",
          caption: "The queen forks the king, the bishop and the pawn on b2.",
        },
      },
      {
        text: "If White answers 5. Bd2 Qxb2 6. Bc3, Black has a final trick: 6...Bb4! pins the bishop to the king. After 7. Qd2 Bxc3 8. Qxc3, the queen lands on c1 with mate: 8...Qc1#.",
        diagram: {
          fen: "r1b1k1nr/pppp1ppp/2n5/4P3/8/2Q2N2/P1P1PPPP/RNq1KB1R w KQkq - 1 9",
          caption: "The Englund trap ends in checkmate. Several natural-looking moves by White allow it, and plenty of better moves exist.",
        },
      },
      "These are cheap tricks, like hot sauce on a meal. They can win quick games and they are fun, but the fact that they work against some opponents does not mean they are sound. Other Black gambits that leave you with a decent position even if the trap fails include the Portuguese Gambit and the Budapest Gambit, which are worth looking at if you enjoy sharp play.",
    ],
  },
  {
    id: 70,
    title: "Endgame Foundations: Solved vs Practical Endgames",
    level: "800-1300",
    puzzle: {
      fen: "8/8/8/2k5/7P/8/8/K7 w - - 0 1",
      instruction: "You're White. Is the pawn race won? Start it: push the pawn.",
      solutions: ["h5"],
      success: "h5! The black king is outside the 'square' of the pawn, so it can't catch it. That counting trick is the first endgame tool you need.",
    },
    slides: [
      "An endgame is what is left when most of the pieces are gone. A rough test: you have fifteen capturable men (2 knights, 2 bishops, 2 rooks, a queen and 8 pawns, not counting the king). If half or more are off the board, you're in an endgame. This is the hardest part of chess to summarise, since entire 400-page books are written about it, so the aim here is to give you the key tools.",
      "Some endgames are 'solved'. With best play the result is already known: it is a win, a draw or a loss, depending on where the pieces stand and whose move it is. King and pawn versus king is the simplest solved endgame. Solved endgames reward exact knowledge: there is no 'slightly better' there. If you know the technique, you win (or draw) every time.",
      "Most endgames are 'practical': winnable but not certain. Here the result depends on how well you apply pressure. Magnus Carlsen is famous for grinding opponents down in long endgames, posing small problems at every move until someone errs. Practical endgames are about accumulating small advantages.",
      "What decides an endgame? Six factors: material (who is ahead), activity (whose pieces and king are more active), weaknesses (targets that can be attacked), zugzwang (a position in which having to move is a disadvantage), domination (one piece restricting another), and passed pawns (pawns that no enemy pawn can stop). We'll meet each of them in the next courses.",
      "Zugzwang and zwischenzug come from German, fianchetto and tempo from Italian, and en passant and en prise from French. Chess is a game with a very international vocabulary.",
    ],
  },
  {
    id: 71,
    title: "King and Pawn Endgames: The Square, Opposition and Key Squares",
    level: "800-1300",
    puzzle: {
      fen: "8/3k4/8/4K3/4P3/8/8/8 w - - 0 1",
      instruction: "You're White. Black has just stepped out of the opposition. Advance your king to the winning side.",
      solutions: ["Kf6", "Kd5", "Kf5"],
      success: "Kf6! The king moves forward, taking the key squares, and the pawn can follow. This is exactly why it matters who has the move in king-and-pawn endgames.",
    },
    slides: [
      "King and pawn endgames are the foundation of all endgames, since in the end many endgames turn into them. The goal is simple: promote the pawn to a queen and then win with the queen-and-king mate. If you know whether a king-and-pawn position is won, you can simplify into it from a position with more pieces.",
      {
        text: "The Square: to see if a king can catch a pawn, draw a square. If the pawn is four moves from promoting, the square is 4 x 4. If the defending king can step inside this square, it catches the pawn. Here the black king is outside the square. White to move wins; with Black to move, the king steps into the square and the game is a draw.",
        diagram: {
          fen: "8/8/8/2k5/7P/8/8/K7 w - - 0 1",
          caption: "The pawn on h4 needs 4 moves to promote. The square runs from d4 to h8. The king on c5 is outside.",
          highlights: ["d4", "d5", "d6", "d7", "d8", "e4", "e8", "f4", "f8", "g4", "g8", "h4", "h5", "h6", "h7", "h8"],
        },
      },
      {
        text: "When both kings are involved, the defender must learn the technique. If the defending king stands in front of the pawn, it should be a draw with best play. The key is the opposition: the kings face each other with one square between them and the side that has to move must give way. Here White to move cannot make progress.",
        diagram: {
          fen: "8/4k3/8/4K3/4P3/8/8/8 w - - 0 1",
          caption: "With White to move, Black holds the opposition and draws.",
          highlights: ["e5", "e7"],
        },
      },
      {
        text: "With Black to move, the situation flips: Black must step aside, and White's king advances. If Black plays ...Kd7, then Kf6, Kd5 or Kf5 all win, as the king gets to the key squares in front of the pawn and escorts it home. The same position is a draw or a win depending on whose turn it is, so counting tempi is the essence of endgames.",
        diagram: {
          fen: "8/3k4/8/4K3/4P3/8/8/8 w - - 0 1",
          caption: "Black has just been forced to step aside. The white king now takes the opposite side and escorts the pawn.",
          highlights: ["d5", "f5", "f6"],
        },
      },
      {
        text: "Rook pawns (a- and h-pawns) are a special case. With the pawn on the edge the stronger king has no room to force the defender back, so the game is a draw if the defending king reaches the corner. You can even get stalemate. Even if White wins the king's chase, the defending king hides on h8 and White has nothing.",
        diagram: {
          fen: "7k/8/6K1/7P/8/8/8/8 b - - 0 1",
          caption: "A rook pawn with the defending king in the corner: a draw whoever moves.",
          highlights: ["h8", "h5"],
        },
      },
      "When there are more pawns, king activity and an outside passed pawn count most. An outside passed pawn (a pawn on the edge of the board with no enemy pawn able to stop it) acts as a decoy: the enemy king must run over to stop it, and meanwhile your own king walks in and gobbles up the remaining pawns. Look for ways to create one with a pawn exchange.",
      "Practical rules: put your king in front of the pawn, count the square, fight for the opposition and keep your king active. And if you're the defender of a lost-looking position, remember the rook-pawn draw and stalemate tricks.",
    ],
  },
  {
    id: 72,
    title: "Knight Endgames: Two Weaknesses and Decoys",
    level: "800-1300",
    puzzle: {
      fen: "8/8/4k3/1r6/8/5N2/8/K7 w - - 0 1",
      instruction: "You're White. Knights are great forkers even in endgames. Find the knight move that checks the king and attacks the rook.",
      solutions: ["Nd4+"],
      success: "Nd4+! The knight forks the king on e6 and the rook on b5. The king must move, and the knight takes the rook.",
    },
    slides: [
      "Knight endgames behave a lot like pawn endgames, since knights are slow pieces. King activity matters, and so do passed pawns. If all the pawns come off, a king and knight cannot checkmate, so the game is a draw. In a position with equal material and pawn clusters on both sides, expect a draw by trading down.",
      {
        text: "The standout winning idea is the outside passed pawn as a decoy. If one side has a pawn far from the others, the opponent's king or knight has to go stop it, and then the other pawns fall. The player with the extra passed pawn creates two weaknesses: the opponent cannot both stop the passed pawn and defend their own pawns.",
        diagram: {
          fen: "8/8/4k3/8/3n4/8/8/K7 w - - 0 1",
          caption: "King and knight against king is a dead draw: no mate is possible, so the aim of the weaker side is to trade off all the pawns.",
        },
      },
      "A famous example is the 1995 game Adams against Speelman. White had an extra pawn in a knight ending that should have been a draw, but later White picked up another pawn with a knight fork, used pawns as decoys, and reached a position where Black's only hope was to sacrifice the knight for White's last pawn (a draw by insufficient material). White trapped the knight, forced the trade of knights, and won the resulting king-and-pawn ending. Following it shows how endgame tricks fit together.",
      "The lesson is that even small advantages can win: an extra pawn, a more active king, and a passed pawn far from the main battle. Your task as the stronger side is to create two threats at once. Your task as the weaker side is to look for the drawing resources: trade the pawns, sacrifice a piece for the last pawn, or give a perpetual harassment with the knight.",
      "Practical hints for knight endgames: keep your king central, avoid putting knights on the rim, and count tempi precisely when racing a pawn. Knights are the only pieces that can capture without being attacked back by the same type of piece, which makes forks very effective, so always check the squares from where the enemy knight can fork your pieces.",
    ],
  },
  {
    id: 73,
    title: "Knight vs Bishop Endgames",
    level: "800-1300",
    puzzle: {
      fen: "n7/7k/3K4/8/3B4/8/8/8 w - - 0 1",
      instruction: "You're White. The black knight on a8 has no safe move. Bring your king closer so it can attack the knight, while still covering c7.",
      solutions: ["Kc6", "Kd7"],
      success: "Good: your king still covers c7 and the bishop still covers b6, so the knight can't escape, and the king will arrive next to it and win it. A dominated knight is a dead piece.",
    },
    slides: [
      "Bishops usually beat knights in endgames. A bishop covers the whole board quickly, while a knight takes many moves to cross it. In open positions with pawns on both wings, the bishop is clearly better and can dominate the knight: the knight may find that every square it can move to is covered.",
      {
        text: "A knight on the edge of the board can get trapped. Here the black knight on a8 has only two moves, b6 and c7, and both are covered by White's pieces. A dominated knight is a liability, and White can attack it at leisure.",
        diagram: {
          fen: "n7/7k/3K4/8/3B4/8/8/8 w - - 0 1",
          caption: "The knight on a8 can't move safely: b6 is covered by the bishop and c7 by the king.",
          highlights: ["a8", "b6", "c7"],
        },
      },
      "With an outside passed pawn as a decoy, bishop endings with a stuck knight are won quite easily: the opposing king runs to catch the passed pawn, and the white king walks over to collect the rest. A famous example is the 2006 game Kveinys against Ejsmont, in which Black simply resigned because the knight could not move at all.",
      {
        text: "Knights can still be better than bishops in some structures. When all of your pawns stand on one colour, the opposing bishop (of the other colour) can't attack any of them, and may become useless. Try to keep your pawns on the opposite colour from the bishop of your opponent.",
        diagram: {
          fen: "8/5k2/8/3b4/8/2P1P1P1/1P3P2/2K5 w - - 0 1",
          caption: "Every white pawn is on a dark square, while Black's bishop moves on light squares only: it can't attack one of them.",
          highlights: ["c3", "e3", "g3", "b2", "f2"],
        },
      },
      "In such positions the knight and king may team up to attack the enemy pawns. All six of White's pieces on dark squares in the book's example make Black's light-squared bishop completely useless. Generally speaking, though, the bishop is the stronger piece, and we examine why in the strategy courses.",
    ],
  },
  {
    id: 74,
    title: "Bishop Endgames: Opposite Colours, Zugzwang and Pawn Colour",
    level: "800-1300",
    puzzle: {
      fen: "8/5k2/8/3b4/8/2P1P1P1/1P3P2/2K5 w - - 0 1",
      instruction: "You're White. In endgames the king is a fighting piece. Bring it toward the centre.",
      solutions: ["Kd2", "Kc2"],
      success: "Kd2! The king heads for the centre while all your pawns stay safe on dark squares, out of reach of Black's light-squared bishop.",
    },
    slides: [
      "Bishop endgames come in two kinds. In opposite-coloured bishop endgames, each side has a bishop that moves on a different colour of squares. These are famously drawish: one extra pawn usually isn't enough to win, because the defending bishop can sacrifice itself for the last pawn and leave a king-and-bishop versus king ending (an insufficient-material draw). The attacker's bishop cannot attack or block the defender's.",
      "Even two extra pawns can be insufficient if they are connected or close together, since the defender's king and bishop can blockade them. But when pawns are on both sides of the board, the defender's pieces are overloaded and the attacker wins. Scattered pawns are a weakness in the middlegame but an asset in the endgame because they stretch the defender.",
      {
        text: "In same-coloured bishop endgames, the colour of your pawns decides. Keep your pawns on the opposite colour from the enemy bishop so they're immune to it, and when the enemy pawns are on the bishop's own colour, the bishop becomes tied to their defence. If a defending bishop and king are each tied up like that, a zugzwang can arise: any move loses something.",
        diagram: {
          fen: "8/5k2/8/3b4/8/2P1P1P1/1P3P2/2K5 w - - 0 1",
          caption: "White's pawns are all on dark squares, safe from the light-squared bishop.",
          highlights: ["c3", "e3", "g3", "b2", "f2"],
        },
      },
      "Zugzwang is a position where the player to move would prefer to pass: any move worsens the position. In bishop endings the bishop is often stuck defending two pawns at once. If it moves, one pawn falls, and if the king moves, the enemy king runs to the other side and captures a pawn. It occurs only in the endgame, because with more pieces there is almost always a spare move.",
      "A model of technique is the 2021 game Carlsen against Firouzja. The position looked equal, with same-coloured bishops, but Carlsen put all his pawns on dark squares, froze Black's pawns on light squares, then sacrificed a pawn to activate his king so that it threatened Black's queenside pawns. He won an endgame of complete symmetry by posing problems every move.",
      "Takeaways: in opposite-coloured bishop endgames, defend, because you can draw even a pawn or two down; in same-coloured endgames, keep your pawns on the colour your opponent's bishop cannot attack and activate your king.",
    ],
  },
  {
    id: 75,
    title: "Rook Endgames: Cutting Off the King and the Philidor Position",
    level: "800-1300",
    puzzle: {
      fen: "4k3/8/r3P3/3K4/7R/8/8/8 b - - 0 1",
      instruction: "You're Black and defending the Philidor position. The pawn has reached e6. Play the key defensive move.",
      solutions: ["Ra1"],
      success: "Ra1! The rook goes behind the pawn and starts checking from a safe distance. The white king can't hide from the checks, so the game is a draw.",
    },
    slides: [
      "Rook endgames are the most common type of endgame and among the most complicated. With a pawn, the aim is again to promote, and with rook against nothing the aim is the king-and-rook mate we learned earlier.",
      {
        text: "The key winning idea is to cut off the enemy king with your rook. A rook on the c-file stops a king on the e-file from crossing to the queenside, leaving it unable to help its own rook or its own pawns. Black's king here is denied access to most of the board, and White can escort the pawn with the king.",
        diagram: {
          fen: "7r/8/8/1P2k3/8/1K6/8/2R5 b - - 0 1",
          caption: "The rook on c1 cuts the king off from the queenside. White's king escorts the b-pawn.",
          highlights: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"],
        },
      },
      "Another guideline is to put the rook behind the passed pawn, whether it's yours or the opponent's: it protects the pawn's advance and loses no activity as the pawn moves up. Rooks belong behind passed pawns, so the pawn can't block the rook.",
      {
        text: "Be careful: rook and pawn versus rook is not automatically a win. The Philidor Position is the key defence. The defending king stands in front of the pawn and the defending rook sits on the sixth rank (the third rank from the defender's side), cutting the attacking king off from advancing.",
        diagram: {
          fen: "4k3/8/r7/3KP3/8/8/8/7R w - - 0 1",
          caption: "Black's rook on a6 keeps the white king off the 6th rank. White cannot make progress.",
          highlights: ["a6", "e8"],
        },
      },
      {
        text: "When the pawn finally goes to e6, the defending rook drops down to the back rank, behind the pawn, and starts giving checks from a distance. The attacker's king has no shelter from the checks, so the game is drawn by repetition or agreement. This is a theoretical draw: know the technique or you will lose a drawn position.",
        diagram: {
          fen: "4k3/8/r3P3/3K4/7R/8/8/8 b - - 0 1",
          caption: "After e6, Black plays Ra1! and checks from behind.",
          highlights: ["a1", "e8"],
        },
      },
      "Grandmasters treat many rook endgames with an extra pawn on the same side of the board as a draw because of the Philidor technique, even with three pawns against two. Scattered pawns change that: if one of your pawns is on the other side of the board, the defender's king can't both stop it and guard the other pawns. That pawn becomes the decoy that wins the game.",
    ],
  },
  {
    id: 76,
    title: "Queen Endgames: Queen vs Pawn and Perpetual Check",
    level: "800-1300",
    puzzle: {
      fen: "7K/8/6Q1/8/8/8/3pk3/8 w - - 0 1",
      instruction: "You're White with a queen against a pawn on d2 supported by its king. Start the winning technique with a check.",
      solutions: ["Qe4+"],
      success: "Qe4+! Every check drags the black king in front of its own pawn, which gives your king time to walk across the board. A d-pawn loses to this technique.",
    },
    slides: [
      "Queen versus pawn is a solved endgame: the side with the queen should win, but only if the pawn is one of the b-, d-, e- or g-pawns. For the a-, c-, f- and h-pawns there are drawing stalemate tricks. The queen's side must stop the pawn from queening and also bring the king over to help.",
      {
        text: "The technique: a series of checks that force the defending king to step in front of its own pawn. Each time the king stands in front of the pawn it blocks it for a move, and the white king walks one step closer. Here after the queen checks and the king goes in front of the pawn, the white king has to come all the way across the board.",
        diagram: {
          fen: "7K/8/8/8/8/4Q3/3p4/3k4 w - - 0 1",
          caption: "The black king stands in front of its own pawn; White's king still has to walk down to help the queen.",
        },
      },
      {
        text: "But with the pawn on the a-file (or h-file) it doesn't work. If White's king approaches, the position becomes a stalemate. Black's king sits in the corner, the pawn is blocked by its own king on a1, and any white king move leaves Black with no legal move.",
        diagram: {
          fen: "8/7Q/8/8/8/8/p1K5/k7 b - - 0 1",
          caption: "Stalemate: the pawn on a2 can't move, and the king can't move to b1 or b2.",
        },
      },
      "With a c- or f-pawn, the defender uses the corner trick: the king runs to the corner and sacrifices the pawn, because if the queen captures the pawn then it is stalemate. White did everything right and still can't win, 'the mysteries of board geometry'.",
      "Queen endgames with queens on both sides are different. The king plays a lesser role, since an open king invites checks. The side with more pawns plays for a win but must beware of perpetual check, a never-ending series of checks that forces a draw by repetition. Always find a safe haven for your king before pushing pawns. In the 1960 World Championship, Tal had two extra pawns against Botvinnik and could only win by hiding the king so well that checks ended.",
      "Summary: in queen endings, count the pawns and look for perpetual checks. When you have an extra pawn, make your king safe first. When you're losing, look for a perpetual. And in queen versus pawn, know which pawns draw and which lose.",
    ],
  },
  {
    id: 77,
    title: "Intermediate Tactics: Pattern Recognition and CCA",
    level: "800-1300",
    puzzle: {
      fen: "1r1k4/5Qpp/p4b2/2p5/5N2/qP6/P5P1/1K6 w - - 0 1",
      instruction: "White to move. Black threatens ...Qb2 mate. Look at the checks: which knight move gives check and leaves Black exactly one reply?",
      solutions: ["Ne6+"],
      success: "Ne6+! Black's only legal reply is Kc8, and then Qc7 is mate. Choosing the check with the fewest replies is how you start.",
    },
    slides: [
      "At intermediate level, tactics are mostly pattern recognition. Strong players aren't calculating everything from scratch; they have seen certain shapes so many times that the shape itself jumps out. You can't be born with that. It is trained by solving puzzles over and over until the right idea comes without effort, a bit like a boxer who has drilled a defence until he no longer blinks.",
      "The mindset for every move is CCA: checks, captures, attacks. Look at all three for yourself and for your opponent. These are forcing moves: they limit the replies your opponent has, so you can calculate further. A quiet move gives the opponent maybe thirty replies you cannot predict. A check may give one or two.",
      "Order of attention: first find every check, then every capture, then every attack. When there are several options, start with the move that leaves the opponent the fewest replies. That is only a starting point, not a guarantee: if the most forcing move gets you nowhere, move on to the next one.",
      "Do this on defence too. Asking 'what does my opponent want?' after every move finds threats before they land. Pattern recognition works in both directions, so training your checkmate eye also helps you notice danger in your own position.",
      "The next courses go through the main intermediate patterns: mate in two and three, winning material, removing the defender, the in-between move (zwischenzug), discovered attacks, sacrifices, deflection and attraction. The only real way to master them is volume: aim for a thousand puzzles, not ten.",
    ],
  },
  {
    id: 78,
    title: "Checkmate in Two with CCA",
    level: "800-1300",
    puzzle: {
      fen: "1r1k4/5Qpp/p4b2/2p5/5N2/qP6/P5P1/1K6 w - - 0 1",
      instruction: "Find the mate in two for White.",
      solutions: ["Ne6+"],
      success: "Ne6+ Kc8 Qc7#. The knight check removes every defence.",
    },
    slides: [
      "'Checkmate in two' means White has a forced mate: a first move, any reply, then a second move that mates. To find it, don't test checks at random. Count the replies each check allows.",
      {
        text: "Here Black is far ahead in material and threatens ...Qb2 mate. White has several queen checks (Qf8+, Qg8+, Qd5+...), but each allows Black at least two replies, so none is forcing enough.",
        diagram: {
          fen: "1r1k4/5Qpp/p4b2/2p5/5N2/qP6/P5P1/1K6 w - - 0 1",
          caption: "The white queen has many checks, but each gives Black a choice.",
        },
      },
      {
        text: "The knight check Ne6+ leaves one legal move, Kc8. The knight also blocks the e-file and now protects c7.",
        diagram: {
          fen: "1r1k4/5Qpp/p3Nb2/2p5/8/qP6/P5P1/1K6 b - - 1 1",
          caption: "After Ne6+, the black king has only c8.",
        },
      },
      {
        text: "Then Qc7 is checkmate: the queen is protected by the knight on e6 and the king has no flight squares. All that material for Black was irrelevant.",
        diagram: {
          fen: "1rk5/2Q3pp/p3Nb2/2p5/8/qP6/P5P1/1K6 b - - 3 2",
          caption: "Qc7#. The queen is defended by the knight.",
          highlights: ["c7", "e6"],
        },
      },
      "Notice the order: if White hesitates, Black plays ...Qb2 mate first. When both sides have mating threats, only the move with tempo (a check) is fast enough. So find all the checks, then rank them by how few replies they allow.",
      "Don't stop at the first check that looks good. Quiet-looking knight checks and bishop checks are easy to miss because the queen's checks are so visible. List every one.",
    ],
  },
  {
    id: 79,
    title: "Danger Levels: Ignore a Threat with a Bigger One",
    level: "800-1300",
    puzzle: {
      fen: "4k3/pp3ppp/8/8/3n4/8/PP2BPPP/3Q2K1 w - - 0 1",
      instruction: "White to move. The bishop on e2 is attacked. Don't retreat it: play the forcing check that also attacks the knight.",
      solutions: ["Qa4+"],
      success: "Qa4+! The king has to react and the knight is attacked too, so the bishop on e2 no longer needs saving.",
    },
    slides: [
      "When one of your pieces is attacked, the instinct is to save it. But run the CCA list first, even then. This brings in danger levels: you may ignore your opponent's threat if you can make one that is equal or bigger.",
      "The biggest threat there is, is check. A king is worth more than anything, so while your king is in check, your opponent cannot capture your bishop. They have to respond to the check first.",
      {
        text: "Black's knight on d4 attacks the white bishop on e2. The natural reply is to move the bishop. But the queen has a check from a4, which also hits the knight along the fourth rank.",
        diagram: {
          fen: "4k3/pp3ppp/8/8/3n4/8/PP2BPPP/3Q2K1 w - - 0 1",
          caption: "The bishop on e2 is attacked, but White has a forcing check.",
          highlights: ["e2", "d4", "a4"],
        },
      },
      {
        text: "After Qa4+ Black has to deal with the check. Whatever Black plays, the bishop is no longer in danger and the knight and the a7 pawn are targets as well. Black's best is to block with the knight, ...Nc6, but then White has gained time.",
        diagram: {
          fen: "4k3/pp3ppp/8/8/Q2n4/8/PP2BPPP/6K1 b - - 1 1",
          caption: "Qa4+ forces Black to respond; the attack on the bishop is over.",
          highlights: ["a4", "e8"],
        },
      },
      "Danger levels also work in defence. If you are attacked, ask whether your opponent's threat is bigger than yours: a mate threat outranks a capture, a queen outranks a pawn. Rank the threats before choosing which one to answer.",
      "Remember the conditions: your check must be genuinely forcing, must not lose material for nothing, and must lead somewhere. Checking just for the sake of checking is the commonest mistake.",
    ],
  },
  {
    id: 80,
    title: "Checkmate in Three: Forcing Every Move",
    level: "800-1300",
    puzzle: {
      fen: "5R2/kpp5/p3p3/3bP3/8/6Pq/2Q2P2/6K1 w - - 0 1",
      instruction: "White to move and mate in three. The first move is a queen check.",
      solutions: ["Qc5+"],
      success: "Qc5+! Each of White's next moves is a check: Qc5+ b6, Qxc7+ Bb7, Qb8#.",
    },
    slides: [
      "Mate in three adds another layer: White must find three moves, and at each step Black's replies are forced or nearly so. Here White is under threat too, so every move must be a check; a quiet move loses to a mate.",
      {
        text: "Black threatens ...Qg2# and ...Qh1#. White has only two checks, Ra8+ (which just loses a rook after the king takes... ) and Qc5+. Only one of them makes sense.",
        diagram: {
          fen: "5R2/kpp5/p3p3/3bP3/8/6Pq/2Q2P2/6K1 w - - 0 1",
          caption: "Black threatens mate on g2 or h1, so White must keep checking.",
          highlights: ["g2", "h1"],
        },
      },
      {
        text: "Qc5+ forces ...b6, the only way to interpose. Black's own bishop d5 and pawns box the king in.",
        diagram: {
          fen: "5R2/kpp5/p3p3/2QbP3/8/6Pq/5P2/6K1 b - - 1 1",
          caption: "After Qc5+ the only legal reply is b6.",
        },
      },
      {
        text: "Qxc7+ is the next check. A move earlier it wasn't check; now that the pawn has moved to b6, the c7 pawn is capturable with check, and Black must block with Bb7.",
        diagram: {
          fen: "5R2/k1Q5/pp2p3/3bP3/8/6Pq/5P2/6K1 b - - 0 2",
          caption: "Qxc7+ leaves only Bb7.",
          highlights: ["c7", "b7"],
        },
      },
      {
        text: "Qb8# finishes: the queen is protected by the rook on f8 and the king has no escape.",
        diagram: {
          fen: "1Q3R2/kb6/pp2p3/4P3/8/6Pq/5P2/6K1 b - - 2 3",
          caption: "Qb8#.",
          highlights: ["b8", "f8"],
        },
      },
      "The point isn't to force mates all the time, but to train your instincts. These patterns help you find checkmates, and they help you see when your own king is in danger.",
    ],
  },
  {
    id: 81,
    title: "Winning Material with CCA",
    level: "800-1300",
    puzzle: {
      fen: "5rk1/1b3p2/p1n2npp/1p1B4/1P6/P6P/5PP1/R2R2K1 w - - 0 1",
      instruction: "White to move. Start the combination: take the knight on c6.",
      solutions: ["Bxc6"],
      success: "Bxc6! After Bxc6 Rd6 forks bishop and knight and White wins a piece.",
    },
    slides: [
      "CCA isn't only for checkmates. Use it everywhere. Often the best result is a plain gain of material, found by scanning checks, captures and attacks and calculating what the trades leave behind.",
      "Weaknesses matter here: look for pieces that aren't defended by anything. A fork or a double attack hits two loose pieces and the opponent can only save one.",
      {
        text: "Black is up a point of material, but White has an idea. Checking first: the only check, Bxf7+, loses a bishop for a pawn, so reject it. Captures: Bxc6 trades bishop for knight, and Black recaptures with the bishop b7.",
        diagram: {
          fen: "5rk1/1b3p2/p1n2npp/1p1B4/1P6/P6P/5PP1/R2R2K1 w - - 0 1",
          caption: "Both sides look level; a trade changes things.",
          highlights: ["d5", "c6"],
        },
      },
      {
        text: "After Bxc6 Bxc6, Rd6! forks the bishop on c6 and the knight on f6. Black can't save both. The knight and bishop were loosely guarded, which is why the fork works.",
        diagram: {
          fen: "5rk1/5p2/p1bR1npp/1p6/1P6/P6P/5PP1/R5K1 b - - 1 2",
          caption: "Rd6 attacks both minor pieces.",
          highlights: ["c6", "f6", "d6"],
        },
      },
      "We reached Rd6 by running the checklist: no useful checks, a capture that opens a tactic, and then an attack that forks. This is the thinking process, rather than a flash of insight.",
      "The lesson: a fair-looking trade (bishop for knight) can be the first step of a winning combination. Always calculate what the trade leaves on the board before deciding whether it's equal.",
    ],
  },
  {
    id: 82,
    title: "Removing the Defender",
    level: "800-1300",
    puzzle: {
      fen: "1r3rk1/2p1qppp/p3pn2/1p1p4/6PP/2PQ1P2/PPB5/1K2R1R1 w - - 0 1",
      instruction: "White to move. The queen and bishop aim at h7 but the knight defends it. Attack the knight with a pawn.",
      solutions: ["g5"],
      success: "g5! The knight can't leave h7 unguarded, and if it stays, g5xf6 wins it. Always attack the defender.",
    },
    slides: [
      "Sometimes you can't win material or deliver mate because an enemy piece defends the key square or piece. Removing the defender means forcing that piece away or capturing it. The move that attacks the defender is the tactic.",
      {
        text: "White's queen could take on h7 with check, and the queen and bishop battery (queen d3, bishop c2) points there. But the black knight on f6 defends h7 and would simply capture the queen. So the question is: how do we get rid of the knight?",
        diagram: {
          fen: "1r3rk1/2p1qppp/p3pn2/1p1p4/6PP/2PQ1P2/PPB5/1K2R1R1 w - - 0 1",
          caption: "The knight f6 is the only defender of h7.",
          highlights: ["h7", "f6"],
        },
      },
      {
        text: "The answer is the pawn push g5. It attacks the knight. If the knight moves, Qxh7 is mate. If it stays, g5xf6 wins it.",
        diagram: {
          fen: "1r3rk1/2p1qppp/p3pn2/1p1p2P1/7P/2PQ1P2/PPB5/1K2R1R1 b - - 0 1",
          caption: "g5 attacks the defender.",
          highlights: ["g5", "f6"],
        },
      },
      "Black's best try is ...g6, which stops the mate, but then gxf6 wins the knight for nothing. You can remove the defender of a square (here h7) or the defender of a piece. Either way, the tactic works by attacking the thing that holds the position together.",
      "How was it found? By the CCA list: we found a check (Qxh7+) that would be fatal if the knight weren't there, and then looked for an attack on the knight. Ask 'what is stopping this move?' and attack that.",
    ],
  },
  {
    id: 83,
    title: "Zwischenzug: The In-Between Move",
    level: "800-1300",
    puzzle: {
      fen: "2r3k1/4qpp1/1pn4p/2p1N3/8/2P3B1/PP3rPP/K1QR4 w - - 0 1",
      instruction: "White to move. Don't take the rook yet. Play the in-between capture that attacks the queen.",
      solutions: ["Nxc6"],
      success: "Nxc6! The knight attacks the queen, so Black has to deal with that, and the rook on f2 is still hanging afterwards.",
    },
    slides: [
      "A zwischenzug is a forcing move played before the 'expected' one. Typical zwischenzugs are checks, or attacks on a queen or rook. The opponent must respond, and you then play the move you intended after all.",
      {
        text: "Black has just taken a pawn with the knight on d4. The expected reply is cxd4, winning the knight, but after cxd4 Bxb5 trades off the bishops and material is level again. Instead, Bxd7+ first is check, so Black must recapture on d7 and only then does White win the knight.",
        diagram: {
          fen: "r2qkb1r/pppb1pp1/3p3p/1B2p3/3nP3/2P2N2/P4PPP/R1BQ1RK1 w - - 0 1",
          caption: "Bxd7+ is the in-between move. After the recapture, cxd4 wins a piece.",
          highlights: ["b5", "d7", "d4"],
        },
      },
      {
        text: "Zwischenzugs aren't always checks. Here White has captured on f2... White's choice is the knight takes c6, attacking the queen. If it didn't, Black could save the rook on f2. Now Black has to save the queen by capturing the knight with the c8 rook, and White then takes the rook on f2 with the bishop.",
        diagram: {
          fen: "2r3k1/4qpp1/1pn4p/2p1N3/8/2P3B1/PP3rPP/K1QR4 w - - 0 1",
          caption: "Nxc6 attacks the queen, so the rook on f2 stays hanging.",
          highlights: ["c6", "f2"],
        },
      },
      "Why does a free rook not come first? Because the rook on f2 isn't going anywhere if White plays the knight capture with tempo. A move that creates a bigger threat gets played first, and the 'free' piece is still there afterwards.",
      "Pattern: when you have two captures available, ask whether either of them attacks something big. If so, play that one first and take the other on the next move.",
    ],
  },
  {
    id: 84,
    title: "Discovered Attacks and Discovered Checks",
    level: "800-1300",
    puzzle: {
      fen: "7r/8/2k2r2/1p6/3P4/P7/KBP5/6R1 w - - 0 1",
      instruction: "White to move. Play a pawn check that uncovers an attack on a rook.",
      solutions: ["d5+"],
      success: "d5+! The king must move and Bxf6 follows, winning the rook.",
    },
    slides: [
      "A discovered attack happens when one piece moves and reveals an attack by the piece behind it. The best case is a double purpose: the piece that moves makes one threat, and the piece it uncovers makes another.",
      {
        text: "White's d4 pawn blocks the bishop on b2's diagonal toward... here White plays d5+, a pawn check. Black must handle the check, while the move also reveals the bishop's attack on the rook on f6. White wins the rook next move.",
        diagram: {
          fen: "7r/8/2k2r2/1p6/3P4/P7/KBP5/6R1 w - - 0 1",
          caption: "d5+ checks the king and uncovers the bishop's attack on the rook.",
          highlights: ["d5", "f6", "b2"],
        },
      },
      {
        text: "Another example comes from the French Defence, Milner-Barry Gambit. Bb5+ is a discovered attack on the queen: White's queen on d1 looks down the d-file to the black queen on d4, and the bishop moving with check opens the line. Black must answer the check, so the queen falls next.",
        diagram: {
          fen: "r1b1kbnr/pp3ppp/4p3/3pP3/3q4/3B4/PP3PPP/RNBQK2R w KQkq - 0 1",
          caption: "Bb5+ uncovers the queen's attack on d4.",
          highlights: ["b5", "d4", "d1"],
        },
      },
      "The discovery only works because the moving piece makes a check. If the bishop simply moved with no check, Black could capture the white queen with the queen and it would be an even trade. The forcing move gives you the tempo.",
      "Look for discoveries whenever you have two pieces on the same line, with a friendly piece in between. Ask: what if this middle piece moves with a threat of its own?",
    ],
  },
  {
    id: 85,
    title: "Sacrifices, Deflection and Attraction",
    level: "800-1300",
    puzzle: {
      fen: "r5k1/ppq3b1/2np1rQR/2p3N1/8/2PP4/PP3PPP/4R1K1 w - - 0 1",
      instruction: "White to move. Sacrifice the rook to drag the king into the corner, then mate.",
      solutions: ["Rh8+"],
      success: "Rh8+! Kxh8 (the bishop is pinned) and Qh7#. The rook was bait.",
    },
    slides: [
      "A sacrifice is giving up material for tactical or positional compensation. A middlegame sacrifice is like a gambit: you may give up a knight for a pawn but wreck the opposing king's position. Two sacrifice patterns deserve names: deflection and attraction.",
      {
        text: "Sacrifice with discovery. In this Sicilian position Black has just played ...Nxd3. White shouldn't recapture. Nxe6+ is check and uncovers an attack by White's queen on Black's queen. Black must answer the check, and the queen falls next.",
        diagram: {
          fen: "2r4r/1b3pk1/pq1ppbpp/8/3N4/P1NnQ1P1/1PP4P/1K1R1R2 w - - 0 2",
          caption: "White to move: the knight on d4 can check on e6, uncovering the queen.",
          highlights: ["d4", "e6"],
        },
      },
      {
        text: "Deflection: you pull a defender away from the square it guards. White's queen and bishop battery aims at f7, and only the queen on e7 guards it. Bxc5! attacks the queen with a pin, and when it takes the bishop, f7 is no longer protected and Qf7 is mate.",
        diagram: {
          fen: "5k2/4q3/2n2pQ1/2p1pP1B/7P/1r6/5BPK/8 w - - 0 1",
          caption: "Bxc5 deflects the queen away from f7.",
          highlights: ["c5", "f7", "e7"],
        },
      },
      {
        text: "Attraction: you sacrifice to drag a piece to a bad square. Here Rh8+! forces the king to take, since the bishop is pinned, and Qh7 is checkmate on the very square the king was lured to.",
        diagram: {
          fen: "r5k1/ppq3b1/2np1rQR/2p3N1/8/2PP4/PP3PPP/4R1K1 w - - 0 1",
          caption: "Rh8+ drags the king to h8.",
          highlights: ["h8", "h7"],
        },
      },
      "Deflection and attraction both bait an enemy piece. Deflection pulls it away from something; attraction pulls it onto something. In both cases you need the check or the pin to make the bait compulsory.",
      "None of this needs memorising by name, but naming a pattern helps you remember it. And the real teacher is volume: one thousand puzzles, not ten.",
    ],
  },
  {
    id: 86,
    title: "Pawn Structure and Pawn Breaks",
    level: "800-1300",
    puzzle: {
      fen: "4k3/ppp2ppp/4p3/3p4/3P4/2P1P3/PP3PPP/4K3 b - - 0 1",
      instruction: "Black to move. Play the typical pawn break against White's pyramid.",
      solutions: ["c5"],
      success: "c5! Black challenges the centre. If White captures, Black recaptures with a piece that develops, and White's structure is loosened.",
    },
    slides: [
      "Pawns are only worth a point each, but they build the fence that defines every position. That fence is called the pawn structure. Almost every opening leads to a typical structure, and knowing it tells you what plans make sense in the middlegame. All eight pawns together are worth eight points, more than anything but the queen.",
      {
        text: "This is the London System pawn structure with kings only. White's pawns form a pyramid (c3, d4, e3) that protects itself and gives a good square on e5 for a knight later. It's a closed structure, since many pawns are locked together.",
        diagram: {
          fen: "4k3/ppp2ppp/4p3/3p4/3P4/2P1P3/PP3PPP/4K3 w - - 0 1",
          caption: "The London pawn pyramid: c3, d4, e3.",
          highlights: ["c3", "d4", "e3", "e5"],
        },
      },
      "A pawn break is a pawn push that challenges the opponent's pawns, hoping to trade and open lines for your pieces. Against the London pyramid, Black's main break is ...c5. If White captures, White gives up a central pawn and Black can recapture with a developing move. White's own breaks are c4 or e4, whichever is supported by pieces.",
      "Pawn complexes matter too. If most of your pawns stand on light squares, your light squares are well protected but your light-squared bishop is hemmed in, and your dark squares can become holes. In that case it can make sense to trade the light-squared bishop and keep the dark-squared one. This is the Maróczy Bind idea: White's pawns on light squares restrict Black but leave dark-square holes.",
      "Space and breaks are linked. In the King's Indian Defence, White has more space on the queenside and plays pawn breaks there, away from his own king; Black plays pawn breaks on the kingside. Don't advance the pawns in front of your own castled king: they are your shelter. In the Advance Caro-Kann, White has central space and Black breaks with ...c5 and ...f6 to chip at the chain.",
      "Counterplay means answering your opponent's progress with threats of your own. If you are the cramped side, find your pawn breaks, because without them the opponent's good structure will slowly squeeze you.",
    ],
  },
  {
    id: 87,
    title: "Pawn Weaknesses: Isolated, Backward and Doubled Pawns",
    level: "800-1300",
    puzzle: {
      fen: "4k3/pp3ppp/8/3P4/8/8/PP3PPP/4K3 w - - 0 1",
      instruction: "White to move. Bring the king toward the centre to support the isolated pawn.",
      solutions: ["Kd2", "Ke2", "Kf1"],
      success: "Good: in endings an isolated pawn needs the help of the king, which is a fighting piece.",
    },
    slides: [
      "Every pawn move changes the structure, and some structures contain weaknesses. Learn to recognise them, both to attack them in the opponent's position and to avoid creating them in your own.",
      {
        text: "An isolated pawn has no friendly pawns on the adjacent files. White's d5 pawn is isolated. It can be a strength if your pieces are active and use the space it gives, or a liability if your pieces are tied down defending it. A pawn that cannot advance because the square in front is occupied or controlled is blockaded.",
        diagram: {
          fen: "4k3/pp3ppp/8/3P4/8/8/PP3PPP/4K3 w - - 0 1",
          caption: "White's d-pawn has no neighbours on the c- or e-file.",
          highlights: ["d5", "c4", "e4"],
        },
      },
      {
        text: "A backward pawn is not necessarily isolated, but it has fallen behind its neighbours, can't be defended by a pawn, and can't safely advance. Black's e6 pawn is backward: White's d4 and f4 pawns and the knight on f3 control e5. If it goes forward it's simply captured. It needs constant defence by pieces, which then lose freedom.",
        diagram: {
          fen: "4k3/pp6/4p3/3p1p2/3P1P2/5N2/PP4PP/4K3 w - - 0 1",
          caption: "Black's e6 pawn: no pawn support, and the square in front is controlled.",
          highlights: ["e6", "e5"],
        },
      },
      "Doubled pawns are two pawns of the same colour on one file. They're less mobile, and the front pawn isn't protected by the pawn behind. But they aren't always bad: they can add control of the centre and open files for your rooks and bishops. In the Petrov, White's doubled c-pawns come with active bishops and queen. Doubled, isolated pawns that can't move and can't be defended are terrible; tripled pawns are best avoided entirely.",
      {
        text: "A pawn chain is a diagonal line of pawns, each defended by the one behind. White's chain c3-d4-e5 grips space. Attack a chain at its base, the pawn that nothing defends. Black here would target c3 and d4 to undermine the chain.",
        diagram: {
          fen: "4k3/pp3ppp/3p4/4P3/3P4/2P5/PP3PPP/4K3 w - - 0 1",
          caption: "The chain c3-d4-e5. The base is c3.",
          highlights: ["c3", "d4", "e5"],
        },
      },
      {
        text: "Pawn islands and majorities: groups of connected pawns are islands. If you have more pawns than your opponent on one wing, you have a majority there. White has three pawns to two on the queenside; Black has four to three on the kingside. In the endgame, a majority can create a passed pawn.",
        diagram: {
          fen: "4k3/pp2pppp/8/8/8/8/PPP2PPP/4K3 w - - 0 1",
          caption: "White's queenside majority (3v2); Black's kingside majority (4v3).",
          highlights: ["a2", "b2", "c2", "e7", "f7", "g7", "h7"],
        },
      },
      "Pawn storms happen when pawns march at a castled king. Do it when your own king is on the other side (opposite-side castling); otherwise you remove your own shelter.",
    ],
  },
  {
    id: 88,
    title: "Bishops vs Knights: Which Is Better?",
    level: "800-1300",
    puzzle: {
      fen: "r3k3/8/8/3N4/8/8/8/4K3 w - - 0 1",
      instruction: "White to move. Use a knight's special power: attack king and rook at the same time.",
      solutions: ["Nc7+"],
      success: "Nc7+! A knight fork: the king must move and the knight takes the rook. Nothing else attacks like a knight.",
    },
    slides: [
      "Both are worth three points, but Fischer and Kasparov valued the bishop at roughly 3.15 to 3.25. The reasons are mobility and range.",
      {
        text: "From the centre of an empty board a bishop reaches thirteen squares.",
        diagram: {
          fen: "8/8/8/3B4/8/8/8/k6K w - - 0 1",
          caption: "A bishop on d5: 13 squares.",
          highlights: ["a2", "a8", "b3", "b7", "c4", "c6", "e4", "e6", "f3", "f7", "g2", "g8"],
        },
      },
      {
        text: "A knight in the same spot reaches only eight. A bishop can also trap a knight completely (cover all its squares), but a knight can never trap a bishop on an empty board. And a bishop can cross the whole board in one move where a knight needs four or five.",
        diagram: {
          fen: "8/8/8/3N4/8/8/8/k6K w - - 0 1",
          caption: "A knight on d5: 8 squares.",
          highlights: ["b4", "b6", "c3", "c7", "e3", "e7", "f4", "f6"],
        },
      },
      "The bishop's drawback is that it only sees one colour. Knights can visit all 64 squares, can hop over pieces, and fork pieces from an angle that nothing else uses. Bishops prefer open positions, because pawns block their diagonals; the more pawns and the more closed the position, the less effective they are. Knights are fine in both and can reroute over blockades.",
      {
        text: "An outpost is a square in enemy territory, protected, where no enemy pawn can attack the piece. Knights love outposts. The white knight on d6 is supported by the e5 pawn, and Black has no c- or e-pawn left to kick it. A bishop can also use an outpost, but the supporting pawn blocks one of its diagonals, whereas a knight still hops over it.",
        diagram: {
          fen: "2b3k1/pp3ppp/3N4/4P3/8/8/PP3PPP/6K1 w - - 0 1",
          caption: "Nd6 is a classic outpost, supported by e5.",
          highlights: ["d6", "e5"],
        },
      },
      "Knights can cooperate on one square, for example two knights both controlling d5. Two bishops can't do that because they sit on opposite colours. But having both bishops against a bishop and knight, or two knights, is generally an asset in open positions: you control both colours, and your opponent's pieces have to come close to threaten yours. If you lack the bishop pair, put your pawns on the colour of the opponent's bishop to blunt it.",
      "The practical rule: don't give up your bishop for an enemy knight without a good reason. But there are always exceptions, such as when the exchange lets you plant a knight on an outpost.",
    ],
  },
  {
    id: 89,
    title: "Rooks: Files, Doubling, the Seventh Rank and Rook Lifts",
    level: "800-1300",
    puzzle: {
      fen: "6k1/4R3/8/8/8/8/8/R5K1 w - - 0 1",
      instruction: "White to move. Finish with the ladder mate.",
      solutions: ["Ra8"],
      success: "Ra8#! One rook checks, the other covers the seventh rank, so the king has nowhere to go.",
    },
    slides: [
      "A rook is worth five points and typically arrives later in the game than the other pieces. Mobility is the reason: from the centre of an empty board it reaches fourteen squares, and from the corner also fourteen, which is why rooks suffer much less than bishops and knights from being badly placed. A rook is also always better in an endgame because king and rook can checkmate; king and bishop or knight cannot.",
      {
        text: "A rook on the centre of an empty board covers fourteen squares.",
        diagram: {
          fen: "8/8/8/3R4/8/8/8/k6K w - - 0 1",
          caption: "A rook on d5: 14 squares.",
          highlights: ["a5", "b5", "c5", "d1", "d2", "d3", "d4", "d6", "d7", "d8", "e5", "f5", "g5", "h5"],
        },
      },
      "In the opening a rook's job is limited: after castling, one rook is already pointing toward the middle. Then place the rooks on central files, or on a file that is already open, or one that will probably open after a trade. Rooks love open files: if there's an open c-file, put a rook there, and choose the rook that won't leave its neighbour trapped in the corner.",
      "Rooks are strongest together. Doubled rooks on one file form a battery. Rooks can also double horizontally: two rooks on the seventh (or second) rank are like a buzz saw, attacking pawns and the king's rank. They can also give a ladder checkmate, one rook checking and the other cutting off the next rank.",
      {
        text: "Here the rook on e7 already controls the seventh rank. Ra8 is a checkmate: the rook on a8 checks along the back rank while the rook on e7 covers f7, g7 and h7.",
        diagram: {
          fen: "6k1/4R3/8/8/8/8/8/R5K1 w - - 0 1",
          caption: "Rooks on the 7th and 8th ranks: a ladder mate.",
          highlights: ["e7", "a8"],
        },
      },
      "A rook is a five-point piece only at its best. Its relative value changes: you may give a rook for a knight to open the enemy king (a short-term gain) or to wreck the pawn structure (a long-term one). A rook lift swings a rook up the board and across to join an attack, for example Re3 and Rg3. A flank pawn can also be thrown forward, supported by rook and queen, to open a file for the rook instead of simply sliding it to the middle.",
    ],
  },
  {
    id: 90,
    title: "The Queen: Batteries, Forks and Safe Handling",
    level: "800-1300",
    puzzle: {
      fen: "4k3/8/8/8/7b/8/8/3Q2K1 w - - 0 1",
      instruction: "White to move. Win the bishop with a fork.",
      solutions: ["Qa4+"],
      success: "Qa4+! Black cannot block or save the bishop on h4 while dealing with the check.",
    },
    slides: [
      "The queen is the strongest piece because it combines the rook and bishop. It can strike from a distance and then switch wings in a single move. But the queen is not a lone raider: against the 39 points of an army at the start, an early queen just becomes a target. A queen leads an attack well only with a supporting cast.",
      "Queen and rook make a strong battery, lined up on a file, rank or diagonal for a mate. Queen and bishop work on the same diagonal, like Qd3 and Bc2 pointing at h7. And a queen with a knight is perhaps the most dangerous pairing, because the knight's move is the one thing the queen cannot do. The two attack the same squares from different angles.",
      {
        text: "Queen forks are common, especially a check that also attacks a loose piece. Here Qa4+ checks the king on e8 and also attacks the bishop on h4 along the fourth rank. The bishop can't help, so White wins it. The queen did the work of a bishop (the diagonal check) and a rook (the rank attack) in one move.",
        diagram: {
          fen: "4k3/8/8/8/7b/8/8/3Q2K1 w - - 0 1",
          caption: "Qa4+ forks king and bishop.",
          highlights: ["a4", "e8", "h4"],
        },
      },
      "The CCA list again: always look for checks. A quiet queen move can create a fork a rook could not make because a rook cannot move diagonally. And in a defensive position, a queen move that attacks the king and a far-away piece also stops a mate threat on the other side.",
      "Use the queen aggressively, not as a bodyguard stuck guarding your king. But check its safety every move, as carefully as you check your king: trapped or blundered queens lose games, and almost everyone loses a few on the way up. Trade queens only for a reason: if you're behind, trading your strongest piece makes it harder to come back.",
    ],
  },
  {
    id: 91,
    title: "Trading Pieces: When to Trade and When Not To",
    level: "800-1300",
    puzzle: {
      fen: "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
      instruction: "White to move. Make the necessary opening recapture.",
      solutions: ["Nxd4"],
      success: "Nxd4! The knight recaptures and White has a lead in development. The tension was resolved on White's terms.",
    },
    slides: [
      "Equal points don't make an equal trade. Every trade changes the board: pieces see new squares, structures change, kings open. Before trading, ask who benefits. Rule of thumb: if you can't say in words why a trade helps you, don't make it.",
      "Opening trades are special. In the Scotch Opening, Black has to take on d4 or White dominates the centre. But after White recaptures with the knight, Black trading knights leaves Black with no developed pieces while White's queen sits safely in the centre. In the opening, developing and then trading your developed piece is a loss of time. Often the answer is to keep the tension: let pieces see each other without capturing, as in the Semi-Slav where neither side wants to take on c4 or d5.",
      {
        text: "Here is the Scotch position after 1.e4 e5 2.Nf3 Nc6 3.d4 exd4. White should recapture with the knight (a necessary opening trade), not worry about the pawn.",
        diagram: {
          fen: "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
          caption: "After ...exd4 White recaptures: this exchange is part of the opening.",
          highlights: ["d4", "f3"],
        },
      },
      "Do trade: when you're ahead, to simplify into a winning endgame; to gain a positional edge (double the opponent's pawns, open their king, swap a bad piece for their good one); when you're under attack and the exchange removes the attackers. Don't trade: when you're behind (fewer pieces means fewer chances); a good piece for a bad one; or when you're attacking and the trade would kill your attack.",
      "Examples: Bxb8 on move three of the London is awful. It's 'three for three' on paper but you give up a developed bishop for a sleeping knight. A knight dominating d6 shouldn't take a bishop on c8 either: that bishop is doing nothing and the knight is a thorn. Likewise a bishop and knight for a rook and pawn is six for six on paper but really a piece down, with fewer pieces developed.",
      "And creating a weakness is a good reason to trade: a queen trade may leave the opponent with a weak pawn (like a backward c6 pawn) that a rook on the open file attacks forever. A bishop for a knight is a good trade if it lets your own knight land on an outpost, such as d5. Never say 'I always' or 'I never': each position decides.",
    ],
  },
  {
    id: 92,
    title: "The Master Checklist: Finding Good Moves and Plans",
    level: "800-1300",
    puzzle: {
      fen: "r2qkb1r/pppb1pp1/3p3p/1B2p3/3nP3/2P2N2/P4PPP/R1BQ1RK1 w - - 0 1",
      instruction: "White to move. Use the checklist. Find the in-between check before you recapture on d4.",
      solutions: ["Bxd7+"],
      success: "Bxd7+! After the recapture, cxd4 wins the knight. Checks first, always.",
    },
    slides: [
      "Everything in this book can be folded into one routine for every move. Step one: ask 'what does my opponent want?' Find the threat or idea behind their last move. If you skip this step, you will eventually miss a threat and react wrongly.",
      "Step two: look for checks, captures and attacks, in that order, for yourself. Evaluate each. Does the check lead anywhere? Is the capture good or bad for the structure? Can the attack simply be escaped, or does it even help the opponent?",
      "Step three: look for weaknesses in the enemy position: loose pieces, backward or isolated pawns, squares you could attack. Step four, if none of that is available: improve your position. Develop, centralise your king or rook, take space with a pawn, or choose a sensible trade.",
      {
        text: "Example of the zwischenzug step in action: Black's knight has just taken on d4. Checks: Bxd7+ is check. It is an in-between move that wins the point because after ...Qxd7 (or Kxd7) cxd4 wins a piece.",
        diagram: {
          fen: "r2qkb1r/pppB1pp1/3p3p/4p3/3nP3/2P2N2/P4PPP/R1BQ1RK1 b - - 0 1",
          caption: "After Bxd7+ Qxd7 White plays cxd4 and has won a knight.",
          highlights: ["d7", "d4"],
        },
      },
      "Sometimes the answer is humble. In one example the author simply retreated the queen because the opponent threatened to push a pawn that would fork queen and bishop; taking would let the knight in. Defence is part of the plan: accept that your opponent is calling the shots and stay afloat.",
      "Another example: faced with a rook attack down the f-file, a player captured the f-pawn and then pushed the e-pawn, keeping the file closed and creating a passed pawn. Closing the line that the enemy rook wants is a perfectly good plan.",
      "When nothing is urgent, ask what trade or improvement helps. In a better position with no immediate tactics, you can bring a bishop to g5 to trade it for a knight and damage the opponent's structure. Then the game continues with a clear reason for each move.",
      "Final advice: keep studying beyond this course: books, videos, puzzles, and an engine to review your own games. There is always more to learn, and that is the beauty of chess.",
    ],
  },
];
