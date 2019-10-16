CXX = g++
CXXFLAGS = -Wall -Werror -Wextra -pedantic -std=c++17 -g -fsanitize=address
LDFLAGS =  -fsanitize=address

SRC = 
OBJ = $(SRC:.cc=.o)
EXEC = start

all: $(EXEC)

$(EXEC): $(OBJ)
	$(CXX) $(LDFLAGS) -o $@ $(OBJ) $(LBLIBS)

LOCAL_DIR = chacravieja.elrena.co

clean:
	rm -rf $(OBJ) $(EXEC)

install:
	yarn install

develop:
	yarn run develop

sync:
	yarn run sync

build:
	rm -rf $(LOCAL_DIR)/ && \
	rm -rf public/ && \
	yarn run build

project:
	yarn run start

deploy:
	mv public/ chacravieja.elrena.co && \
	scp -r chacravieja.elrena.co/ root@167.99.54.123:/var/www && \
	rm -rf chacravieja.elrena.co/

help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'