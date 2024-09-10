import React from "react";
import styles from "../../styles/ArrowContainer.module.scss";

const ArrowSection = ({ direction, long }) => {
  return (
    <>
    
      {direction === "arrow-down" && (
        <>
          {/* Línea discontinua vertical - hacia abajo
          Flecha en el extremo inferior de la línea 
           */}
          <svg width="100" height="300" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="50"
              y1="20"
              x2="50"
              y2="250"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="10"
              className={styles.dashedLine}
            />
            {/* <circle cx="50" cy="10" r="5" fill="black" />
            <polygon points="45,150 55,150 50,160" fill="black" /> */}
            <circle cx="50" cy="10" r="5" fill="black" />
            {/* Flecha en el extremo inferior de la línea */}
            <polygon points="45,250 55,250 50,260" fill="black" />
          </svg>
        </>
      )}

      {direction === "arrow-up" && (
        <>
          {/* Línea discontinua vertical - hacia arriba
        Flecha en el extremo superior de la línea
             
         */}
          <svg width="100" height="200" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="50"
              y1="10"
              x2="50"
              y2="150"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="5,5"
              className={styles.dashedLine}
            />
            <circle cx="50" cy="150" r="5" fill="black" />
            <polygon points="45,10 55,10 50,0" fill="black" />
          </svg>
        </>
      )}

      {direction === "arrow-right" && (
        <>
          {/* Línea discontinua horizontal - hacia derecha
        Flecha en el extremo derecho de la línea
        */}
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="20" // inicio del largo del recorrido
              y1="50"
              x2="150" // fin del largo del recorrido
              y2="50"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="5,5"
              className={styles.dashedLine}
            />
            <circle cx="10" cy="50" r="5" fill="black" />
            <polygon points="150,45 150,55 160,50" fill="black" />
          </svg>
        </>
      )}

      {direction === "arrow-left" && (
        <>
          {/* Línea discontinua horizontal - hacia izquierda
         Flecha en el extremo izquierdo de la línea
         */}
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="50" // inicio del largo del recorrido
              y1="50"
              x2="180" // fin del largo del recorrido
              y2="50"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="5,5"
              className={styles.dashedLine}
            />
            <circle cx="190" cy="50" r="5" fill="black" />
            <polygon points="50,45 50,55 40,50" fill="black" />
          </svg>
        </>
      )}

      {direction === "double-circle" && (
        <>
          {/*
        Flecha en el extremo izquierdo de la línea
         Línea discontinua horizontal - hacia izquierda 
         */}
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="50" // inicio del largo del recorrido
              y1="50"
              x2="150" // fin del largo del recorrido
              y2="50"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="5,5"
              className={styles.dashedLine}
            />
            <circle cx="50" cy="50" r="5" fill="black" />
            <circle cx="150" cy="50" r="5" fill="black" />
          </svg>
        </>
      )}


    </>
  );
};

export default ArrowSection;
