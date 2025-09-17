import React, { createContext, useState, useEffect, useContext } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);

  useEffect(() => {
    const calcularPrecoTotal = () => {
      const novoPrecoTotal = carrinho.reduce((acc, item) => {
        return acc + (item.price * item.quantidade);
      }, 0);
      setPrecoTotal(novoPrecoTotal);
    };

    const calcularQuantidadeTotal = () => {
      const novaQuantidadeTotal = carrinho.reduce((acc, item) => {
        return acc + item.quantidade;
      }, 0);
      setQuantidadeTotal(novaQuantidadeTotal);
    }

    calcularPrecoTotal();
    calcularQuantidadeTotal();
  }, [carrinho]);

  const adicionar = (item) => {
    const itemNoCarrinho = carrinho.find(i => i.id === item.id);
    if (itemNoCarrinho) {
      incrementar(item.id);
    } else {
      setCarrinho([...carrinho, { ...item, quantidade: 1 }]);
    }
  }

  const remover = (itemId) => {
    const novoCarrinho = carrinho.filter((i) => i.id !== itemId);
    setCarrinho(novoCarrinho);
  }

  const incrementar = (itemId) => {
    const novoCarrinho = carrinho.map((produto) => {
      if (produto.id === itemId) {
        return { ...produto, quantidade: produto.quantidade + 1 };
      }
      return produto;
    });
    setCarrinho(novoCarrinho);
  }

  const decrementar = (itemId) => {
    const itemNoCarrinho = carrinho.find((produto) => produto.id === itemId);
    if (itemNoCarrinho?.quantidade === 1) {
      remover(itemId);
    } else {
      const novoCarrinho = carrinho.map((produto) => {
        if (produto.id === itemId) {
          return { ...produto, quantidade: produto.quantidade - 1 };
        }
        return produto;
      });
      setCarrinho(novoCarrinho);
    }
  }

  const limparCarrinho = () => {
    setCarrinho([]);
  }

  const contextValue = {
    carrinho,
    precoTotal,
    quantidadeTotal,
    adicionar,
    remover,
    incrementar,
    decrementar,
    limparCarrinho
  };

  return (
    <CarrinhoContext.Provider value={contextValue}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
}
