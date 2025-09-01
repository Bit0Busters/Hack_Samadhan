def Max_marks(arr):
    mx =0
    for i in arr:
        mx = max(mx,i)
    return mx 

arr = [1,3,7,4,9,5]
print(Max_marks(arr))
