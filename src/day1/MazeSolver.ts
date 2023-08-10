interface Point {
    readonly x: number;
    readonly y: number;
}

const DIR = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): Boolean {

    // out of map
    if (
        curr.x < 0 ||
        curr.y < 0 ||
        curr.x >= maze[0].length ||
        curr.y >= maze.length
    ) {
      return false;
    }

    // on a wall
    if (maze[curr.y][curr.x] == wall) {
      return false;
    }

    // found
    if (curr.x == end.x && curr.y == end.y) {
      path.push(curr);
      return true;
    }

    // already seen
    if (seen[curr.y][curr.x]) {
      return false;
    }
    
    seen[curr.y][curr.x] = true;

    path.push(curr); // why we did not add to start || to by pass the false conditions
    
    // move in all directions recursion
    for (let i = 0; i < DIR.length; i++) {
        const [dx, dy] = DIR[i];
        if(walk(
          maze,
          wall,
          {
              x: curr.x + dx,
              y: curr.y + dy,
          },
          end,
          seen,
          path,
      )) {
        return true
      }
    }

    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let seen: boolean[][] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(Array(maze[i].split("").length).fill(false));
    }

    let path: Point[] = [];

    walk(maze, wall, start, end, seen, path);

    console.log(path);

    return path;
}

const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];

// there is only one path through
const result = solve(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });

const mazeResult = [
    { x: 10, y: 0 },
    { x: 10, y: 1 },
    { x: 10, y: 2 },
    { x: 10, y: 3 },
    { x: 10, y: 4 },
    { x: 9, y: 4 },
    { x: 8, y: 4 },
    { x: 7, y: 4 },
    { x: 6, y: 4 },
    { x: 5, y: 4 },
    { x: 4, y: 4 },
    { x: 3, y: 4 },
    { x: 2, y: 4 },
    { x: 1, y: 4 },
    { x: 1, y: 5 },
];


function drawPath(data: string[], path: Point[]) {
  const data2 = data.map((row) => row.split(''));
  path.forEach((p) => {
      if (data2[p.y] && data2[p.y][p.x]) {
          data2[p.y][p.x] = '*';
      }
  });
  return data2.map(d => d.join(''));
}

console.log(drawPath(maze, result))
