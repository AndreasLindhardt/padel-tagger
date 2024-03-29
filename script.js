document.getElementById('submit-button').addEventListener('click', function() {
    const noteFieldValue = document.getElementById('note-field').value;
    const playerValue = document.getElementById('player-button').value;
    const ballTypeValue = document.getElementById('ball-type-button').value;
    const handValue = document.getElementById('hand-button').value;
    const strokeValue = document.getElementById('stroke-button').value;
    const serverValue = document.getElementById('server-button').value;
  
    console.log('Note Field:', noteFieldValue);
    console.log('Player:', playerValue);
    console.log('Ball Type:', ballTypeValue);
    console.log('Hand:', handValue);
    console.log('Stroke:', strokeValue);
    console.log('Server:', serverValue);
  });  