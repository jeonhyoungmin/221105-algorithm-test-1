Text = "We will never be able to recognize opportunities if we first don’t recognize all that we have and all that we’ve been given."

print(len(Text))

print(len(Text.split()))

print(Text[0])
count = 1
for i in Text:
  if i == ' ':
    count += 1

print(count)