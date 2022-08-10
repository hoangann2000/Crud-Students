function SinhVien(ma,ten,email,matKhau,ngay,khoaHoc,toan,ly,hoa) {
    //Property 
    this.maSV = ma;
    this.tenSV = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngaySinh = ngay;
    this.khoaHoc = khoaHoc;
    this.diemToan = toan;
    this.diemLy = ly;
    this.diemHoa = hoa;
    this.dtb = 0;
    //Method
    this.tinhDTB = function(){
        this.dtb = (this.diemToan +  this.diemLy + this.diemHoa)/3
    }
}