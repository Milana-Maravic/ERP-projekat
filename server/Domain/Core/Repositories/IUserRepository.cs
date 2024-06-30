﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.Domain.Dtos;

namespace ERP.Domain.Core.Repositories
{
    public interface IUserRepository : IBaseRepository
    {
        public Task<SiteUserDto> GetUserWithEmailAsync(string email);
    }
}
