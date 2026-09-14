const RecallStore={
 key:'recall_state_v2',
 defaults:{xp:0,coins:250,streak:0,correct:0,answered:0,theme:'dark',decks:[],favorites:[],settings:{sound:true,questionsPerGame:5}},
 get(){try{return {...this.defaults,...JSON.parse(localStorage.getItem(this.key)||'{}')}}catch{return {...this.defaults}}},
 save(state){localStorage.setItem(this.key,JSON.stringify(state));return state},
 patch(data){return this.save({...this.get(),...data})},
 addXp(amount){const s=this.get();s.xp+=amount;this.save(s);return s},
 addCoins(amount){const s=this.get();s.coins=Math.max(0,s.coins+amount);this.save(s);return s},
 answer(correct){const s=this.get();s.answered++;if(correct)s.correct++;this.save(s);return s},
 addDeck(deck){const s=this.get();s.decks.push({...deck,id:deck.id||Date.now().toString()});this.save(s);return s},
 deleteDeck(id){const s=this.get();s.decks=s.decks.filter(d=>d.id!==id);this.save(s);return s},
 getDeck(id){return this.get().decks.find(d=>d.id===id)},
 reset(){localStorage.removeItem(this.key);return this.get()}
};