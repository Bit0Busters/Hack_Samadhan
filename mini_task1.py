def print_stedent_details(obj):
    for d in obj:
        print(f'{d}-{obj[d]}')

student = {
    "Name":"Natasha Mathur",
    "Age":20,
    "Gender":"Female",
}

print_stedent_details(student)
