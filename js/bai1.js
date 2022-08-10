/**
 * Lấy thông tin từ form
 * Tính điểm trung bình
 * Xếp loại học lực của sinh viên
 */

function layThongTin() {
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var loai = document.getElementById("loaiSV").value;
    var toan = Number(document.getElementById("txtDiemToan").value);
    var van = Number(document.getElementById("txtDiemVan").value);
    console.log(ma,ten,loai,toan,van);


    var sinhVien ={
        maSV:ma,
        tenSV:ten,
        loaiSV: loai,
        diemToan:toan,
        diemVan:van,
        tinhDTB(){
            return (this.diemToan + this.diemVan)/2
        },
        xepLoai(){
            var dtb = this.tinhDTB();
            if(dtb> 8 && dtb <=10){
                return "Giỏi"
            }else if(dtb>= 6 && dtb <=8){
                return "Khá"
            }else{
                return "Yếu"
            }
        }
    }


    console.log(sinhVien);
    hienThiKetQua(sinhVien);

}


function hienThiKetQua(sv) {
    document.getElementById("spanTenSV").innerHTML = sv.tenSV;
    document.getElementById("spanMaSV").innerHTML = sv.maSV;
    document.getElementById("spanLoaiSV").innerHTML = sv.loaiSV;
    document.getElementById("spanDTB").innerHTML = sv.tinhDTB();
    document.getElementById("spanXepLoai").innerHTML = sv.xepLoai();
}














