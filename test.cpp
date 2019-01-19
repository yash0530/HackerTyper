#include <iostream>
using namespace std;

int main()
{
	int limit;
	cout << "Enter limit: ";
	cin >> limit;

	int first = 0, second = 1, next;
	for (int i = 0; i < limit; i++)
	{
		cout << first << endl;
		next = first + second;
		first = second;
		second = next;
	}
}
