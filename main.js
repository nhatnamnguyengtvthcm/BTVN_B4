/* Bai 1 
    Input : 3 số a,b,c
    proscess:
    B1. so sanh từn cặp số để lấy ra số lớn nhất.Gán max = số lớn nhất
    B2.so sánh 2 số con lại và sắp xêp theo thứ tự min, mid
    output:Xuât ra 3 số theo thứ tự min, mid, max
*/
function Ascending(a, b, c){
    var min = a;
    var mid = b;
    var max = c;
   if (a >= b && a >= c) {
       max = a;
       if (b >=c){
           mid = b;
           min =c;
       }
       else {
            min = b;
            mid =c;
       }
   }
   if (b >= a && b >= c) {
    max = b;
    if (a >=c){
        mid = a;
        min =c;
    }
    else {
         min = a;
         mid =c;
    }
    }
    if (c >= a && c >= b) {
        max = c;
        if (a >=b){
            mid = a;
            min =b;
        }
        else {
             min = a;
             mid =b;
        }
    }

    return ("các số theo thứ tự tăng dần: " + min +  "," + mid + "," + max);

}

document.getElementById("b1_btn").addEventListener("click", function(){
    var a = parseInt(document.getElementById("b1_num_1").value);
    var b = parseInt(document.getElementById("b1_num_2").value);
    var c = parseInt(document.getElementById("b1_num_3").value);
    document.getElementById("b1_footer").innerHTML =  Ascending(a, b , c);
})

/* B2
    Input:Check box vs các giá trí tương ứng vs các thành viên trong gia đình
    process:So sánh già trị nhận dược để tìm case đúng
    output: xuất ra màn hình giá lời chào vs thành viên đang sử dụng
*/


document.getElementById("b2_btn").onclick = function(){
    var check_value = document.querySelector(".form-check-input:checked").value;
    if(check_value === "1"){
        document.getElementById("b2_footer").innerHTML =  "Chào Ba";
    }
    else if(check_value === "2"){
        document.getElementById("b2_footer").innerHTML =  "Chào Mẹ";
    }
    if(check_value === "3"){
        document.getElementById("b2_footer").innerHTML =  "Chào anh trai";
    }
    if(check_value === "4"){
        document.getElementById("b2_footer").innerHTML =  "Chào em gái";
    }

}
;
/* b3 

Input: 3 số nguyên a, b, c
process:  
tong_so_chan = 0
tong_so_le = 0

a % 2 = 0 ? tong_so_chan +=1 : tong_so_le +=1
tương tụ vs b và c
output : tong_so_chan, tong_so_le

*/

document.getElementById("b3_btn").addEventListener("click", function(){
    var a = parseInt(document.getElementById("b3_num_1").value);
    var b = parseInt(document.getElementById("b3_num_2").value);
    var c = parseInt(document.getElementById("b3_num_3").value);
    var so_chan = 0;
    var so_le  = 0;
    if (isNaN(a) || isNaN(b) || isNaN(c)){
        window.alert("Please input integer number");
        return 0;
    }
    var num_list = new Array(a,b,c);
    num_list.forEach(element => {
        element % 2 == 0 ? so_chan +=1 : so_le +=1;
    });
    document.getElementById("b3_footer").innerHTML =  "Tổng số chẵn: " + so_chan + " - " + "Tổng số lẻ: " + so_le;
});


/* b4 

    Input: 3 cạnh tam giác a,b, c
    process:
    a = b = c => tam giác đều
    a = b || a = c || b = c => tam giac đều
    (a^2 = b^2 + c^2 ) || (b^2 = a^2 + c^2) || (c^2 = b^2 + a^2) => tam giác vuông
    Còn lại => tam giác thường

    Ouput: Xuất ra loại tam giác


*/

document.getElementById("b4_btn").addEventListener("click", function(){
    var a = parseInt(document.getElementById("b4_num_1").value);
    var b = parseInt(document.getElementById("b4_num_2").value);
    var c = parseInt(document.getElementById("b4_num_3").value);
    var kq;
    if (isNaN(a) || isNaN(b) || isNaN(c)){
        window.alert("Please input integer number");
        return 0;
    }
    if (a == b && a == c){
        kq = "Tam giác đều";
    }
    else if ( a== b || a == c || b == c){
        kq = "tam giác cân";
    }
    else if (a*a == b*b + c*c || c*c == a*a + b*b || c*c == a*a + b*b){
        kq = "tam giác vuông";
    }
    else {
        kq = "tam giac thường";
    }
    document.getElementById("b4_footer").innerHTML =  kq;
})



/* b5: Tính ngày hôm trước và ngày hôm sau 
    input : ngày - tháng - năm
    process:
    - Check tháng : 
    + 1, 3,5,7,8,10, 12 có 31 ngày
    + 4, 6, 9, 11 có 30 ngày
    + tháng 2: 
        + năm nhuận có 29
        + năm không nhuận có 28 ngày

    => tính ra ngày sau = ngày hiện tại + 1, ngày trước = ngày hiện tại - 1
    nếu tràn số ngày trong tháng thì: ngày sau: ngày = 1 và tháng = tháng + 1
                                     ngày trước: ngày = tổng ngày trong (tháng-1) và tháng = tháng -1
    nếu tràn năm: ngày sau: ngày = ngày 1 ,tháng = tháng 1 ,năm = năm + 1
                  ngày trước: ngày = tổng số ngày trong (tháng-1), tháng = tháng -1 , năm = năm -1
    output :
        ngày-tháng-năm của ngày sau và ngày trước

*/

function namNhuan(y){
    return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0);
}
function dateInMonth(m, y){
    var m_31 = [1, 3, 5, 7, 8, 10, 12];
    var m_30 = [4, 6, 9, 11];
    if (m_31.includes(m)){
        return 31;
    }
    if (m_30.includes(m)){
        return 30;
    }
    if(m == 2){
        if(namNhuan(y)){
            return 29;
        }
        else {
            return 28;
        }
    }
}

document.getElementById("b5_btn").addEventListener("click", function(){
    var date = parseInt(document.getElementById("b5_num_1").value);
    var month = parseInt(document.getElementById("b5_num_2").value);
    var year = parseInt(document.getElementById("b5_num_3").value);
    var next_date = date;
    var next_month = month;
    var next_year = year;
    var previous_date = date;
    var previous_month = month;
    var previous_year = year;

    // luồng xử lý cho ngày kế tiếp
    // check thang khac thang 12 va so ngay bang so ngay toi da của tháng hiện tại
    if(month != 12 && date == dateInMonth(month,year))
    {
        next_date=1;
        next_month=month+1;
    }
     // check thang khac thang 12 va so ngay nhỏ hơn so ngay toi da của tháng hiện tại
    else if(month == 12 && date  == dateInMonth(month,year))
    {
        next_date = 1;
        next_month = 1;
        next_year = year + 1;
    }
    else if(month == 2 ){
        if (namNhuan(year)){
            if(date == 29){
                next_date = 1;
                next_month = month + 1;
            }
        }   
        else
        {
         //nếu người dùng nhập vào ngày 28 thì tăng tháng lên 1 và ngày bằng 1
            if(d==28)
            {
                next_date = 1;
                next_month = month + 1;
            }
        }
    }
    else {
        next_date = date + 1;
    }

    // luồng xử lý cho ngày trước đó
    // trường hợp khác tháng 1 và ngày là đầu tháng
    if(month != 1 && date == 1){
        previous_date = dateInMonth(month-1,year);
        previous_month = month - 1;
        // check xem phai năm nhuận hay không;
        if (namNhuan(year)){
            if(month == 3){
                previous_date = 29
                previous_month = 2;
            }
        }
        else {
            if(month == 3){
                previous_date = 28
                previous_month = 2;
            }
        }
       
    }
    // trường hợp tháng 1 và là khác ngày đầu tháng
    else if (month == 1 && date ==1){
        previous_date = dateInMonth(month-1,year);
        previous_month = 12;
        previous_year = year = 1;
    }
    else {
        previous_date = date -1;
    }

    var next_time = new Date(next_year, next_month, next_date);
    var previous_time = new Date(previous_year, previous_month, previous_date);
    document.getElementById("b5_footer").innerHTML =  "<div>" + "Ngày kế tiếp: " + next_time +"</div>" + "<div>" + "Ngày trước đó: " + previous_time +"</div>";
    // document.getElementById("b5_footer").innerHTML =  "<div>" + "Ngày trước đó: " + previous_time +"</div>";
})