using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeSandbox {
    class DateTimeModel {
        protected DateTime? _dt;
        public DateTime? dt {
            get {                
                if(_dt.HasValue)
                    return _dt.GetValueOrDefault().ToUniversalTime().Date;
                return null;
            }

            set {
                if(value.HasValue)
                    this._dt = value.GetValueOrDefault().ToUniversalTime().Date;
            }
        }
    }
}
