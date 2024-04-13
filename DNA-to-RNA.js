// create a function which returns an RNA sequence from the given DNA sequence
// function DNAtoRNA(dna) {
//     let rna = '';
//     // for (i = 0; i < dna.length; i++) {
//     //     // if (dna[i] === 'T') {
//     //     //   rna += 'U';
//     //     // } else {
//     //     //   rna += dna[i];
//     //     // }
//     //     //     }
//     //     rna += (dna[i] === 'T') ? 'U' : dna[i]
//     //     return rna;
//     // }

// }
// function DNAtoRNA(dna) {
// return dna.split('').map((el) => el === 'T' ? 'U' : el).join('')

// }

// const DNAtoRNA = (dna) => dna.replace('T', 'U');
const DNAtoRNA = (dna) => dna.split('T').join('U');

console.log(DNAtoRNA('GCAT'));
