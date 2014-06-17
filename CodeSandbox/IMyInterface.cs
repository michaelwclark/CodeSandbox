using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeSandbox {
    public interface IMyInterface {
        void SomeMethod();
        string SomeOtherMethod();
        string SomeOtherMethod(string arg);

    }

    public class MyConcreteClass : IMyInterface {

        public void SomeMethod() {
            Console.WriteLine("My Concrete Exec: SomeMethod");
        }

        public string SomeOtherMethod() {
            Console.WriteLine("My Concrete Exec: SomeOtherMethod() Returns: \"Hello Concrete!\"");
            return "Hello Concrete!";
        }

        public string SomeOtherMethod(string arg) {
            Console.WriteLine("My Concrete Exec: SomeOtherMethod() Returns:\"{0}\"",arg);
            return arg;
        }

    }

}
