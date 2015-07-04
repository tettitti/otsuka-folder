#include <stdio.h>
#include <stdlib.h>
int main(){
char buf[100];
double x, y;
printf("1つめの数値:");
fgets(buf, sizeof buf, stdin);
x=strtod(buf, NULL);
printf("2つめの数値:");
fgets(buf, sizeof buf, stdin);
y=strtod(buf, NULL);
//あとはここに計算と出力を書く
}
