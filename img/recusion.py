# def fn(i):
#   if i> 10:
#     return

#   print(i)
#   fn(i+1)

# fn(1)

# def search(l, val):
#   for i in l:
#     if i == val:
#       return True
#   return False
def search(l, val, i):
  if(i >= len(l)):
    return False

  if l[i] == val:
    return True
  
  return search(l, val, i+1)


print(search([3,4, 1,3], 11, 0))