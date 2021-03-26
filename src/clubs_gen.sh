#!/usr/bin/env bash

echo "[" > clubs.json

for ((i=0; i<$1; ++i))
do
	echo "{" >> clubs.json

	echo -en "\t\"name\": \"" >> clubs.json
	echo -n `pwgen -1 -0` >> clubs.json
	echo -e "\"," >> clubs.json

	echo -en "\t\"address\": \"" >> clubs.json
        echo -n `pwgen -N 2` >> clubs.json
        echo -e "\"," >> clubs.json

	echo -en "\t\"link\": \"" >> clubs.json
        echo -n "https://t.me/sparkread" >> clubs.json
        echo -e "\"," >> clubs.json

	echo -en "\t\"meeting_date\": \"" >> clubs.json
        echo -n `date --iso-8601` >> clubs.json
        echo -e "\"," >> clubs.json

	echo -en "\t\"book\": \"" >> clubs.json
        echo -n `pwgen -N 2 -0` >> clubs.json
        echo -e "\"," >> clubs.json

	echo -en "\t\"price\": \"" >> clubs.json
        echo -n "300$" >> clubs.json
        echo -e "\"," >> clubs.json

	echo -en "\t\"image\": \"" >> clubs.json
        echo -n "https://source.unsplash.com/random" >> clubs.json
        echo -e "\"" >> clubs.json

	if [[ $(( $i + 1 )) -lt $1 ]];
	then
		echo "}," >> clubs.json
	else
		echo "}" >> clubs.json
	fi
done

echo "]" >> clubs.json
