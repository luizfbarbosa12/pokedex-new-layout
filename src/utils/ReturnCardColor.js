
export const getColors = (type) => {
    switch(type) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#8d8793";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#f8e489";
      case "fairy":
        return "#f1b1ee";
      case "fighting":
        return "#dc7997";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#95b3c8";
      case "ghost":
        return "#8696c5";
      case "grass":
        return "#729F92;";
      case "ground":
        return "#e5a07d";
      case "ice":
        return "#9eddd3";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#c690c6";
      case "psychic":
        return "#f99c9f";
      case "rock":
        return "#d8cdae";
      case "steel":
        return "#cfcfcf";
      case "water":
        return "#71C3FF";
      default:
        return "#BF9762";
    }
  };
