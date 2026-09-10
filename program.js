function main() {
    let ulang;

    do {
      console.log("*Input nominalnya tanpa titik atau koma saja, jika tidak ada maka input 0")  
        let pendapatan = parseFloat(prompt("Masukkan Pendapatan anda:"));
        let listrik = parseFloat(prompt("Berapa biaya Listrik anda? "));
        let makanMinum = parseFloat(prompt("Berapa biaya anda untuk makan dan Minum? "));
        let pajak = parseFloat(prompt("Berapa biaya pajak anda? "));
        let cicilan = parseFloat(prompt("Berapa biaya cicilan anda? "));
        let pengeluaran = listrik + makanMinum + pajak + cicilan;
        let sisa = pendapatan - pengeluaran;
        let total = sisa / pendapatan;
        console.log("Total Pendapatan: Rp." + pendapatan);
        console.log("Total Pengeluaran: Rp." + pengeluaran);
        console.log("Sisa Saldo: Rp." + sisa);
        if (total >= 0.3) {
            console.log("Keuangan anda bagus!");
        } else if (total >= 0.1 && total <= 0.29) {
            console.log("Nabung aja dulu");
        } else {
            console.log("Kacau men");
        }
        ulang = prompt("Ingin menghitung ulang? (ketik y jika iya):");

    } while (ulang && ulang.toLowerCase() === "y");
}

main();
