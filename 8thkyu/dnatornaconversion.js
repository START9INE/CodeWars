Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.



//In this solution i split the string dna into an arrayy
//Called .map() method and passed in e (where e is value in the array being iterated)
// Used a ternary operator (conditional) if e (value) is == to "T" then vlaue = to "U", else value = to value
//finally i joined the array into a string and returned it. 


function DNAtoRNA(dna) {
  return dna.split('').map((e)=> e == "T" ? e = "U": e ).join('');
}



// Best practice below
// They used a regular expression (regex) inside the .replace() method
// (/T/g, "U")
// They replaced all "T" with "U" and used the global search (Matches all occurences)


/function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}
