using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeSandbox {
    internal class NonStatic {
        public string toRet { get; set; }

        public string ReturnMyProperty() {
            Console.WriteLine("ReturnMyProperty returning: {0}", this.toRet);
            return this.toRet;
        }
    
}
}
