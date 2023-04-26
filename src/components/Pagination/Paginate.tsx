import React, { useEffect, useState } from 'react';

interface PaginateEstructure {
    totalPages: number;
    currentPage: number;
    totalPagesCallback: (page: number) => void;
}

const Paginate: React.FC<PaginateEstructure> = ({ totalPages, currentPage, totalPagesCallback }) => {

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            totalPagesCallback(newPage);
        }
      };
    
      const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
          buttons.push(
            <button
              key={i}
              className={`mx-1 px-3 py-2 bg-gray-200 ${
                i === currentPage ? 'bg-gray-300' : ''
              }`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
        return buttons;
      };

      /* const renderPaginationButtons = () => {
        const buttons = [];
        const maxButtonsToShow = 8; // Máximo de botones a mostrar
        const ellipsis = (
          <span key="ellipsis" className="mx-1">
            ...
          </span>
        ); // Elemento de puntos suspensivos
      
        if (totalPages <= maxButtonsToShow) {
          // Si hay 8 o menos páginas, mostrar todos los botones
          for (let i = 1; i <= totalPages; i++) {
            buttons.push(
              <button
                key={i}
                className={`mx-1 px-3 py-2 bg-gray-200 ${
                  i === currentPage ? 'bg-gray-300' : ''
                }`}
                onClick={() => handlePageChange(i)}
              >
                {i}
              </button>
            );
          }
        } else {
          // Si hay más de 8 páginas
          const firstButton = (
            <button
              key={1}
              className={`mx-1 px-3 py-2 bg-gray-200 ${
                1 === currentPage ? 'bg-gray-300' : ''
              }`}
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
          );
          const lastButton = (
            <button
              key={totalPages}
              className={`mx-1 px-3 py-2 bg-gray-200 ${
                totalPages === currentPage ? 'bg-gray-300' : ''
              }`}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          );
          const middleButtons = [];
          const middleButtonsStart = Math.max(2, currentPage - 2); // Página de inicio de los botones del medio
          const middleButtonsEnd = Math.min(totalPages - 1, currentPage + 2); // Página de fin de los botones del medio
      
          for (let i = middleButtonsStart; i <= middleButtonsEnd; i++) {
            middleButtons.push(
              <button
                key={i}
                className={`mx-1 px-3 py-2 bg-gray-200 ${
                  i === currentPage ? 'bg-gray-300' : ''
                }`}
                onClick={() => handlePageChange(i)}
              >
                {i}
              </button>
            );
          }
      
          // Agregar los elementos a la lista de botones
          buttons.push(firstButton);
          if (middleButtonsStart > 2) {
            buttons.push(ellipsis);
          }
          buttons.push(...middleButtons);
          if (middleButtonsEnd < totalPages - 1) {
            buttons.push(ellipsis);
          }
          buttons.push(lastButton);
        }
      
        return buttons;
      }; */
      
    
      return (
        <div className="flex justify-center mt-4">
          <button
            className="mx-1 px-3 py-2 bg-gray-200"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {renderPaginationButtons()}
          <button
            className="mx-1 px-3 py-2 bg-gray-200"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      );
}

export default Paginate