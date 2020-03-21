# convert markdown to html
for x in *.md; do
    pandoc $x -t html5 --template t -s -o ${x%.*}.html
    echo "$x ...done"
done
