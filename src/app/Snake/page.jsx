'use client'
import { useEffect, useRef, useState, useCallback } from 'react';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const gridSize = 15; // Réduction de la taille de la grille pour des éléments plus gros
  const tileSize = 400 / gridSize;

  const [snake, setSnake] = useState([{ x: 7, y: 7 }]); // Position de départ ajustée
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameSpeed, setGameSpeed] = useState(200);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [foodPositions, setFoodPositions] = useState(() => {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return [{ x, y, id: Date.now() }];
  });

  // Définir les niveaux et leurs configurations
  const levels = {
    1: { speed: 200, requiredScore: 5 },
    2: { speed: 180, requiredScore: 10 },
    3: { speed: 160, requiredScore: 15 },
    4: { speed: 140, requiredScore: 20 },
    5: { speed: 120, requiredScore: Infinity }
  };

  // Fonction pour générer une nouvelle position de pomme
  const generateNewFoodPosition = useCallback(() => {
    const occupiedPositions = new Set([
      ...snake.map(s => `${s.x},${s.y}`),
      ...foodPositions.map(f => `${f.x},${f.y}`)
    ]);

    const availablePositions = [];
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const posKey = `${x},${y}`;
        if (!occupiedPositions.has(posKey)) {
          availablePositions.push({ x, y });
        }
      }
    }

    if (availablePositions.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * availablePositions.length);
    return { ...availablePositions[randomIndex], id: Date.now() };
  }, [snake, foodPositions, gridSize]);

  // Mettre à jour le niveau
  const updateLevel = useCallback((newScore) => {
    const nextLevel = level + 1;
    if (nextLevel in levels && newScore >= levels[level].requiredScore) {
      setLevel(nextLevel);
      setGameSpeed(levels[nextLevel].speed);

      // Générer les nouvelles positions de pommes pour le niveau suivant
      const newPositions = [];
      for (let i = 0; i < nextLevel; i++) {
        const newPosition = generateNewFoodPosition();
        if (newPosition) {
          newPositions.push(newPosition);
        }
      }
      if (newPositions.length > 0) {
        setFoodPositions(newPositions);
      }
    }
  }, [level, levels, generateNewFoodPosition]);

  const moveSnake = useCallback(() => {
    if (gameOver || victory) return;
    
    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = {
        x: newSnake[0].x + direction.x,
        y: newSnake[0].y + direction.y,
      };

      // Vérifier les collisions avec les murs
      if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        setGameOver(true);
        return prevSnake;
      }

      // Vérifier les collisions avec le serpent
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);
      
      // Vérifier si une pomme est mangée
      const foodIndex = foodPositions.findIndex(f => f.x === head.x && f.y === head.y);
      if (foodIndex !== -1) {
        const newScore = score + 1;
        setScore(newScore);
        
        if (level < 5 && newScore >= levels[level].requiredScore) {
          updateLevel(newScore);
        } else {
          // Remplacer la pomme mangée par une nouvelle
          const newPosition = generateNewFoodPosition();
          if (newPosition) {
            setFoodPositions(prevPositions => prevPositions.map((pos, index) => 
              index === foodIndex ? newPosition : pos
            ));
          }
        }
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, foodPositions, gameOver, victory, score, level, levels, gridSize, generateNewFoodPosition, updateLevel]);

  const draw = useCallback((ctx) => {
    ctx.clearRect(0, 0, 400, 400);
    
    // Draw grid
    ctx.strokeStyle = '#ddd';
    for (let i = 0; i <= gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * tileSize, 0);
      ctx.lineTo(i * tileSize, 400);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * tileSize);
      ctx.lineTo(400, i * tileSize);
      ctx.stroke();
    }

    // Draw snake with portfolio gradient
    snake.forEach((segment, index) => {
      ctx.fillStyle = '#4CAF50'; // Vert original pour le serpent
      // Augmentation de la taille du serpent en réduisant la marge
      ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize - 0.5, tileSize - 0.5);
    });

    // Draw food with portfolio gradient
    foodPositions.forEach((f) => {
      ctx.fillStyle = '#FF0000'; // Rouge original pour les pommes
      ctx.beginPath();
      // Augmentation de la taille des pommes en augmentant le rayon
      ctx.arc((f.x + 0.5) * tileSize, (f.y + 0.5) * tileSize, (tileSize/2) - 0.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw game over or victory message
    if (gameOver || victory) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, 400, 400);
      
      ctx.fillStyle = '#FFFFFF'; // Blanc pour le texte
      ctx.font = 'bold 30px Arial';
      const message = victory ? 'Victoire!' : 'Game Over!';
      ctx.fillText(message, 150, 200);
    }
  }, [snake, foodPositions, gameOver, victory, gridSize, tileSize]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    draw(ctx);
  }, [draw]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  // Boucle de jeu
  useEffect(() => {
    const gameLoop = () => {
      moveSnake();
    };

    const gameInterval = setInterval(gameLoop, gameSpeed);
    return () => clearInterval(gameInterval);
  }, [moveSnake, gameSpeed]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        background: 'linear-gradient(45deg, #8A2BE2, #FF69B4)',
        backgroundSize: '200% 200%',
        animation: 'gradient 8s linear infinite',
      }}
      tabIndex={0}
    >
      <div className="mb-4 text-white text-xl flex flex-col items-center gap-2 bg-black bg-opacity-30 p-4 rounded-lg">
        <div className="flex items-center gap-6">
          <span className="font-bold">Niveau {level}</span>
          <span>Score: {score}</span>
        </div>
        {level < 5 && (
          <div className="text-sm">
            Prochain niveau dans {levels[level].requiredScore - score} points
            <span className="ml-4">Vitesse: {Math.round((1 / levels[level].speed) * 1000)}x</span>
          </div>
        )}
      </div>
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={400} 
        style={{ 
          border: '2px solid #000',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)'
        }}
      />
      <div className="mt-4 text-white text-xl flex gap-4">
        {(gameOver || victory) && (
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-100 transition-colors font-bold"
          >
            Rejouer
          </button>
        )}
        <button 
          onClick={() => window.location.href = '/'} 
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-bold"
        >
          Menu Principal
        </button>
      </div>
    </div>
  );
};

export default SnakeGame;
