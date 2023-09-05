//Declaring Object Types
type student = {Name:string , F_Name:string, Roll_No:number};
let students:student [] = [
    {
        Name:"Abdullah",
        F_Name:"Shahid",
        Roll_No : 1,
    },
    {
        Name:"Asad",
        F_Name:"Ikram",
        Roll_No : 2,
    },
    {
        Name:"Ahsan",
        F_Name:"Amir",
        Roll_No : 3,
    },
]
    for (let stu = 0 ; stu < students.length ; stu++)
    {
        console.log(students[stu])
    }

    //Shifts in Hospitals of Doctors

    type Doctors = {Dr_Name:String ; Ward:string ; Shift:String ; Shift_Time:string}
    let Doctor:Doctors [] = [
        {
            Dr_Name:"Dr.Khawar Saeed",
            Ward: "Children Ward",
            Shift:"First",
            Shift_Time: "8:00 am to 4:00pm"
        },
        {
            Dr_Name:"Dr.Zubair",
            Ward: "General Ward",
            Shift:"Second",
            Shift_Time: "4:00 pm to 12:00pm"
        },
        {
            Dr_Name:"Dr.Kamran",
            Ward: "Orthopedic Ward",
            Shift:"Third",
            Shift_Time: "12:00 am to 8:00am"
        },
    ]
    let doc = 0;
    while (doc < Doctor.length)
    {
        console.log(Doctor[doc])
        doc++;
    }
    
    for (let Doctors of Doctor)
    {
        console.log("Doctor Name is = " , Doctors.Dr_Name)
        console.log("Ward = " , Doctors.Ward)
        console.log("Duty Shift= " , Doctors.Shift)
        console.log("Shift_Time = " , Doctors.Shift_Time)
    }