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

develop:
	npm run develop

build:
	rm -rf $(LOCAL_DIR)/ && \
	rm -rf public/ && \
	npm run build

deploy:
	mv public/ chacravieja.elrena.co && \
	scp -r chacravieja.elrena.co/ root@167.99.54.123:/var/www && \
	rm -rf chacravieja.elrena.co/