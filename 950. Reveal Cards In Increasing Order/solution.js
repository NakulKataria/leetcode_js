function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b);
    let queue = [];
    
   
    for (let i = deck.length - 1; i >= 0; i--) {
        if (queue.length > 0) {
            queue.unshift(queue.pop()); 
        }
        queue.unshift(deck[i]);
    }
    
    return queue;
}