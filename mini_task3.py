students = [
    {
        "Name":"Aakash Madhwal",
        "Class":"10th",
        "Section":"A",
        "Marks":{
            "Scinece":90,
            "Maths":85,
            "English":87,
            "Hindi":89,
            "Computer":97
        }
    },
    {
        "Name":"Amrita Agnihotri",
        "Class":"10th",
        "Section":"A",
        "Marks":{
            "Scinece":97,
            "Maths":89,
            "English":77,
            "Hindi":90,
            "Computer":99
        }
    },
    {
        "Name":"Amresh Puri",
        "Class":"10th",
        "Section":"A",
        "Marks":{
            "Scinece":77,
            "Maths":69,
            "English":78,
            "Hindi":70,
            "Computer":85
        }
    }
]
def student_percentage(student):
    sum = 0 
    total =0
    for d in student["Marks"]:
        sum += student["Marks"][d]
        total += 100 
    return (sum/total)*100 

def Rank_calculator(student_list):
    L = []
    for std in student_list:
        name = std["Name"]
        percent = student_percentage(std)
        L.append((name,percent))
   
    L.sort(key= lambda x:x[1],reverse=True)
   
    return L

def Display_Ranks(students):
    ranks = Rank_calculator(students)
    i = 1
    for t in ranks:
        print(f"{i} Rank: {t[0]} on {t[1]} percent")
        i += 1 



Display_Ranks(students)
