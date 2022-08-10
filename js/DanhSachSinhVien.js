function DanhSachSinhVien(){
    this.mangSV = [];

    //Method
    this.themSV = function(sv){
        this.mangSV.push(sv);
    }

    // mangSV.splice(index, 1);
    //=> vị trí index cần xóa 
    //=> Dựa vào trường dữ liệu có giá trị duy nhât (mã Sinh Vien)
    //=> tìm được sinh viên đó trong mảng
    //=> vị trí index của sinh viên
    this.timViTri = function(id){
        //chưa tìm thấy sinh viên thì giá trị của viTri là -1
        var viTri = -1;
        this.mangSV.map(function(sv,index){
            //duyệt từng sinh viên 
            //kiểm tra sv nào đang có maSV trùng với id cần tìm
            if(sv.maSV === id){
                //nếu tìm thấy
                viTri = index;
            }
        });
        return viTri;
    }

    this.xoaSV = function(id){
        var viTriXoa= this.timViTri(id);
        if(viTriXoa > -1){
            //tìm thấy
            this.mangSV.splice(viTriXoa,1);
        }
    }

    this.capNhat = function(sv){
        var viTriCapNhat= this.timViTri(sv.maSV);
        if(viTriCapNhat > -1){
            //tìm thấy
            this.mangSV[viTriCapNhat] = sv
        }
    };
}

// Prototype: giúp thêm thuộc tính và phương thức không cần khai báo trực tiếp trong lớp đối tượng

DanhSachSinhVien.prototype.timKiemTen = function(tenTK){
    //tenTK: "Nguyen"
    //tenSV: "Nguyen Van A", "Nguyen Van B"

    // indexOf(): có chứa => return vị trí(index) từ tìm được
    // indexOf() so sánh phân biệt hoa thường
    // => tenTK => chữ thường
    // => tenSV => chữ thường

    var mangTK = [];
    var tenThuong = tenTK.toLowerCase();
    this.mangSV.map(function(sv){
        var tenSVThuong = sv.tenSV.toLowerCase();
        if(tenSVThuong.indexOf(tenThuong) > -1){
            mangTK.push(sv);
        }
    })

    return mangTK;

}